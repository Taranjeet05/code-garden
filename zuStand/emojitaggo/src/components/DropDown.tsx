"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import React, { useState } from "react";

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectValueChange = (value: string) => {
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      {/* Accessible label */}
      <Select onValueChange={handleSelectValueChange}>
        <SelectTrigger
          id="dropdown"
          className="w-[200px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-100 transition"
        >
          <SelectValue placeholder={selectedValue || "Select an option ✨"} />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
          <SelectItem
            value="🐾 Animals"
            className="px-4 py-2 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer"
          >
            🐾 Animals
          </SelectItem>
          <SelectItem
            value="🍎 Fruits"
            className="px-4 py-2 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer"
          >
            🍎 Fruits
          </SelectItem>
          <SelectItem
            value="🌍 Countries"
            className="px-4 py-2 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer"
          >
            🌍 Countries
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDown;
