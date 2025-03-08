"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const CommentCreateForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button size={"sm"} variant={"link"} onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && (
        <form action="" className="space-y-2">
          <Textarea
            name="content"
            placeholder="Write a comment..."
            className="bg-gray-100 focus-visible:ring-0 focus:ring-0 focus:ring-transparent"
          />
          <Button size={"sm"} variant={"secondary"} type="submit">
            save
          </Button>
        </form>
      )}
    </div>
  );
};

export default CommentCreateForm;
