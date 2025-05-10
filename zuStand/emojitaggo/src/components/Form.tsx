import React from "react";
import DropDown from "./DropDown";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <div className="bg-white w-1/2 rounded-lg p-7">
      <h2 className="text-center text-2xl font-bold">Create a New Tag</h2>
      <form action="" className="bg-white space-y-4">
        <div>
          <Label className="text-lg font-semibold mb-2">Category</Label>
          <DropDown />
        </div>
        <div>
          <Label className="text-lg font-semibold">Name</Label>
          <Input type="text" placeholder="Name" className="w-1/2" />
        </div>
        <div>
          <Label className="text-lg font-semibold">Emoji</Label>
          <Input type="text" placeholder="Emoji" className="w-1/2" />
        </div>

        <Button
          className="w-1/2 mt-4 bg-blue-700 text-white text-lg font-extrabold p-7 "
          variant="default"
        >
          Create Tag
        </Button>
      </form>
    </div>
  );
};

export default Form;
