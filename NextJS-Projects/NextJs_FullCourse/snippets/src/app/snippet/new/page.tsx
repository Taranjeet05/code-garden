import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CreateSnippetPage = () => {
  return (
    <form>
      <div>
        <Label>Title</Label>
        <Input type="text" name="Title" id="title" />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea
          placeholder="Please add you code Here..."
          name="code"
          id="code"
        />
      </div>
      <Button type="submit" className="my-4">New</Button>
    </form>
  );
};

export default CreateSnippetPage;
