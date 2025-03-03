import React from "react";
import { Input } from "./ui/input";
import { signIn } from "@/app/actions/sign-in";
import { Button } from "@/components/ui/button";


const HeaderPage = () => {
  return (
    <div>
      <div>
        <h1>Discuss</h1>
      </div>
      <div>
        <Input type="text" placeholder="Search post ..." />
      </div>
      <div>
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
