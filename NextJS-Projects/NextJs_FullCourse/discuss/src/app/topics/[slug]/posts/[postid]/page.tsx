import CommentCreateForm from "@/components/comments/CommentCreateForm";
import CommentList from "@/components/comments/CommentList";
import PostShow from "@/components/posts/PostShow"; 
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

type PostShowPageProps = {
  params: { slug: string; postid: string };
};

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {
  const { slug, postid } = params;
  return (
    <div className="space-y-3">
      <Link href={`/topics/${slug}`}>
        <Button variant={"link"}>
          <ChevronLeft />
          Back to {slug}
        </Button>
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <PostShow postId={postid} /> 
      </Suspense>
      <CommentCreateForm postId={postid} startOpen />
      <CommentList postId={postid} />
    </div>
  );
};

export default PostShowPage;
