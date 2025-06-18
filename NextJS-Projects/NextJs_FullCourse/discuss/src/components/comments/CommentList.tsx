import React from "react";
import CommentShow from "./CommentShow";
import { fetchCommentByPostId } from "@/lib/query/comment";

type CommentListProps = {
  postId: string;
};

const CommentList = async ({ postId } : CommentListProps) => {
  const comments = await fetchCommentByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId == null
  );

  return (
    <div>
      <h1 className="font-bold text-lg">All 0 comments</h1>
      {topLevelComments.map((comment) => (
        <CommentShow
          key={comment.id}
          postId={comment.postId}
          commentId={comment.id}
        />
      ))}
    </div>
  );
};

export default CommentList;
