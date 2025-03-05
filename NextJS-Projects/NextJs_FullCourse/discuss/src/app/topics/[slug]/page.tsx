import PostCreateForm from "@/components/posts/PostCreateForm";
import React from "react";

type TopicShowPageProps = {
  params: { slug: string };
};

const TopicShowPage = async ({ params }: TopicShowPageProps) => {
  const slug = params.slug;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="font-bold text-2xl mb-2">{slug}</h1>
      </div>
      <div>
        <PostCreateForm />
      </div>
    </div>
  );
};

export default TopicShowPage;
