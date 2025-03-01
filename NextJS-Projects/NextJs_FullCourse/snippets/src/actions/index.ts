"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  redirect("/");
};

export async function CreateSnippet(
  prevState: { message: string },
  formData: FormData
) {
  const title = formData.get("title");
  const code = formData.get("code");
  if (!title || typeof title !== "string" || title.length < 3) {
    return { message: "Title is REQUIRED and must be LONGER" };
  }
  if (!code || typeof code !== "string" || code.length < 8) {
    return { message: "Code is REQUIRED and must be LONGER" };
  }

  const snippet = await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log("Created Snippet", snippet);

  redirect("/");
}
