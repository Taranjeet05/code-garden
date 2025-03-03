import React from "react";
import { Input } from "./ui/input";
import { signIn } from "@/app/actions/sign-in";
import { Button } from "@/components/ui/button";


const HeaderPage = () => {
  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-xl font-mono font-bold">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <Input type="text" placeholder="Search post ..." />
      </div>
      <div className="flex justify-end gap-2">
      <form action={signIn}>
            <Button variant={"outline"} type="submit">SignIn with GITHUB</Button>
          </form>
          <form action={signIn}>
            <Button type="submit">SignUp</Button>
          </form>
      </div>
    </div>
  );
};

export default HeaderPage;
