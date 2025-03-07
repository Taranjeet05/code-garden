import React from "react";
import { prisma } from "@/lib";

type PostShowProps = {
  postId: string;
};

const PostShow = async ({ postId }: PostShowProps) => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <h1>Post Show Page - {postId}</h1>
    </div>
  );
};

export default PostShow;
