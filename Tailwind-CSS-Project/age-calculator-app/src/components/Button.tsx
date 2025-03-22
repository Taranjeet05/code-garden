"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Button = () => {
  return (
    <div className="flex items-center mt-16 relative">
      <hr className="border-gray-200 border-1 w-6xl" />
      <button className="rounded-full bg-purple-400 p-2 flex items-center justify-center ml-4 absolute right-7">
        <FaArrowDown className="w-30 h-30 text-white font-thin " />
      </button>
    </div>
  );
};

export default Button;