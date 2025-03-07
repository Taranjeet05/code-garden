import React from "react";

type PostShowPageProps = {
  params: Promise<{ slug: string; postid: string }>;
};

const PostShowPage = async ({params}:PostShowPageProps)  => {

  const { slug, postid } = await params;

  return (
    <div>
      <h1>Post Show Page - {slug} - { postid}</h1>
    </div>
  )
};

export default PostShowPage;
