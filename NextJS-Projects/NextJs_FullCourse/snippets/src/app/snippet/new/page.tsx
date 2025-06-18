"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreateSnippet } from "@/actions/index";
import { useActionState } from "react";

const CreateSnippetPage = () => {
  const [formStateData, xyz] = useActionState(CreateSnippet, { message: "" });

  return (
    <form action={xyz}>
      <div>
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea
          placeholder="Please add you code Here..."
          name="code"
          id="code"
        />
      </div>
      <div
        className={`${
          formStateData.message
            ? "text-red-600 bg-red-100 border border-red-400 p-2 rounded-md mt-3 text-sm animate-fade-in duration-300 opacity-100"
            : "hidden"
        }`}
      >
        {formStateData.message}
      </div>
      <Button type="submit" className="my-4">
        New
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
