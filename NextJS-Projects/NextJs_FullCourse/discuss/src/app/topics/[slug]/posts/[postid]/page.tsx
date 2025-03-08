import CommentCreateForm from "@/components/comments/CommentCreateForm";
import PostShow from "@/components/posts/PostShow";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type PostShowPageProps = {
  params: Promise<{ slug: string; postid: string }>;
};

const PostShowPage = async ({ params }: PostShowPageProps) => {
  const { slug, postid } = await params;

  return (
    <div className="space-y-3">
      <Link href={`/topics/${slug}`}>
        <Button variant={"link"}>
          <ChevronLeft className="w-6 h-6" />
          Back to {slug}
        </Button>
      </Link>
      <PostShow postId={postid} />
      <CommentCreateForm />
    </div>
  );
};

export default PostShowPage;
