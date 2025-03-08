import React from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const CommentCreateForm = () => {
  return (
    <div>
      <Button size={"sm"} variant={"link"}>
        Reply
      </Button>
      <form action="" className="space-y-2">
        <Textarea
          placeholder="Write a comment..."
          className="bg-gray-100 focus-visible:ring-0 focus:ring-0 focus:ring-transparent"
        />
        <Button size={"sm"} variant={"secondary"} type="submit">
          save
        </Button>
      </form>
    </div>
  );
};

export default CommentCreateForm;
