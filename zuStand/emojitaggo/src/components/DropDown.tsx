import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import React from "react";

const DropDown = () => {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="🐾 Animals" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">🐾 Animals</SelectItem>
            <SelectItem value="banana">🍎 Fruits</SelectItem>
            <SelectItem value="grape">🌍 Countries</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDown;
