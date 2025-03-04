"use server";

export async function createTopics(formData: FormData) {
  const name = formData.get("name") as string;
  const discription = formData.get("discription") as string;

  console.log(name, discription);
}
