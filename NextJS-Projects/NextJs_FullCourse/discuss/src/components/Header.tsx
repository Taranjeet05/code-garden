import React from "react";
import AuthHeader from "@/components/Auth-header";
import SearchInput from "./SearchInput";

const HeaderPage = () => {
  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-xl font-mono font-bold">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <SearchInput />
      </div>
      <div className="flex justify-end gap-2">
        <AuthHeader />
      </div>
    </div>
  );
};

export default HeaderPage;
