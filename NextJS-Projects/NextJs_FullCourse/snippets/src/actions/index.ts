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

  // Trim Input to avoid extra white Spaces
  const trimmedTitle = title?.toString().trim();
  const trimmedCode = code?.toString().trim();

  if (!trimmedTitle || trimmedTitle.length < 3) {
    return {
      message: "❌ Title is REQUIRED and must be at least 3 characters long!",
    };
  }
  if (!trimmedCode || trimmedCode.length < 8) {
    return {
      message: "❌ Code is REQUIRED and must be at least 8 characters long!",
    };
  }

  const snippet = await prisma.snippet.create({
    data: {
      title: trimmedTitle,
      code: trimmedCode,
    },
  });
  console.log("Created Snippet ✅:", snippet);

  redirect("/");
}
