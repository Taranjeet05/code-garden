"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Minimum 3 characters required" })
    .regex(/^[a-z-]+$/, {
      message: "Only lowercase letters and hyphens are allowed",
    }),

  discription: z
    .string()
    .min(10, { message: "Minimum 10 characters required" }),
});

type CreateTopicFormState = {
  error: {
    name?: string[];
    discription?: string[];
    formError?: string[];
  };
};

export async function createTopics(
  prevstate: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    discription: formData.get("description"),
  });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      error: {
        formError: ["You need to login to create a topic"],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await prisma.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.discription,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: {
          formError: [error.message],
        },
      };
    } else {
      return {
        error: {
          formError: ["Something went wrong"],
        }
      }
    }
  }
  revalidatePath('/');
  redirect(`topics/${topic.slug}`);
}