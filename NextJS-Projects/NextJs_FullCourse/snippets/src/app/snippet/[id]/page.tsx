import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { deleteSnippet } from "@/actions";
import { notFound } from "next/navigation";

const SnippetViewPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // Convert ID from string to number
  const id = parseInt((await params).id);

  await new Promise((r) => setTimeout(r, 2000));

  // Fetch snippet from database
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  // Handle case where snippet is not found
  if (!snippet) notFound();

  const deletSnippetActions = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="">{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deletSnippetActions}>
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded-md border-gray-200">
        <code>{snippet.code}</code>
      </pre>
      {/* Back to Home Button */}
      <div className="mt-5">
        <Link href="/">
          <Button>⬅ Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default SnippetViewPage;

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();

  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
};
