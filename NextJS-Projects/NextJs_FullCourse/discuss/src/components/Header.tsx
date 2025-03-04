import React from "react";
import { Input } from "./ui/input";
import AuthHeader from "@/components/Auth-header";

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
        <AuthHeader />
      </div>
    </div>
  );
};

export default HeaderPage;
