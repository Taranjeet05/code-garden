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

export async function CreateSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  const snippet = await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log("Created Snippet", snippet);

  redirect("/");
}