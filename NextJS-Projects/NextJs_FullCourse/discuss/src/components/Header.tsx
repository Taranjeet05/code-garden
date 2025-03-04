import React from "react";
import { Input } from "./ui/input";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOutIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const HeaderPage = async () => {
  const session = await auth();
  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-xl font-mono font-bold">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <Input type="text" placeholder="Search post ..." />
      </div>
      <div className="flex justify-end gap-2">
        {session?.user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage src={session.user.image || ""} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <h1 className="font-bold font-mono">{session.user.name}</h1>
              <h1 className="font-medium font-serif">{session.user.email}</h1>
              <Separator className="my-2" />
              <form action={signOut}>
                <Button>
                  <LogOutIcon /> LogOut
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <form action={signIn}>
              <Button variant={"outline"} type="submit">
                SignIn with GITHUB
              </Button>
              <Button type="submit">SignUp</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderPage;
