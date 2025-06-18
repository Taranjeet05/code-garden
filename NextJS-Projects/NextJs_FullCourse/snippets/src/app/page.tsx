import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="">
      <Link href="/">
        <h1 className="text-5xl font-mono font-bold">Home</h1>
      </Link>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href="/snippet/new">
          <Button>New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="bg-slate-300 p-2 rounded-md my-2 flex items-center justify-between"
        >
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
