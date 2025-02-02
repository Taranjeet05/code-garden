import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const SnippetViewPage = async ({ params }: { params: { id: string } }) => {
  // Convert ID from string to number
  const id = parseInt(params.id);

  // Fetch snippet from database
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  // Handle case where snippet is not found
  if (!snippet) return <h1>Snippet Not Found !!..</h1>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="">{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <Button variant={"destructive"}>Delete</Button>{" "}
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded-md border-gray-200">
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  );
};

export default SnippetViewPage;
