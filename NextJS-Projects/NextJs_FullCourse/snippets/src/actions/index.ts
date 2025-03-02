"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
};

export async function CreateSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
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
    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Some internal server error" };
    }
  }

  redirect("/");
}
