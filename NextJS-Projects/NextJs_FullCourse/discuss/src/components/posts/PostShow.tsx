import React from "react";
import { prisma } from "@/lib";
import { notFound } from "next/navigation";

type PostShowProps = {
  postId: string;
};

const PostShow = async ({ postId }: PostShowProps) => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) notFound();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostShow;
