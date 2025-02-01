import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Link href='/'>
        <h1 className="text-5xl font-mono font-bold">Home</h1>
      </Link>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Button>New</Button>
      </div>
    </div>
  );
};

export default Home;
