"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { signIn } from "@/actions/sign-in";
import { signOut } from "@/actions/sign-out";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOutIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const AuthHeader = () => {
  const session = useSession();

  if (session.status === "loading") return null;

  let authContent: React.ReactNode;

  if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src={session.data.user.image || ""} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <h1 className="font-bold font-mono">{session.data.user.name}</h1>
          <h1 className="font-medium font-serif">{session.data.user.email}</h1>
          <Separator className="my-2" />
          <form action={signOut}>
            <Button>
              <LogOutIcon /> LogOut
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={signIn}>
          <Button variant={"outline"} type="submit">
            SignIn with GITHUB
          </Button>
          <Button type="submit">SignUp</Button>
        </form>
      </>
    );
  }

  return authContent;
};

export default AuthHeader;
