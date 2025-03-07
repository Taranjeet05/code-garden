import PostShow from "@/components/posts/PostShow";
import React from "react";


type PostShowPageProps = {
  params: Promise<{ slug: string; postid: string }>;
};

const PostShowPage = async ({params}:PostShowPageProps)  => {

  const { slug, postid } = await params;

  return (
    <div>
      <PostShow postId={postid} />
    </div>
  )
};

export default PostShowPage;
