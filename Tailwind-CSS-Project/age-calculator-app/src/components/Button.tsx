"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

type ButtonProps = {
  onClick: () => void;
}

const Button = ({onClick}: ButtonProps) => {
  return (
    <div className="flex items-center mt-16 relative">
      <hr className="border-gray-200 border-1 w-6xl" />
      <button
      onClick={onClick}
        className="rounded-full p-2 flex items-center justify-center ml-4 absolute right-7"
        style={{ backgroundColor: "var(--color-purple)" }}
      >
        <FaArrowDown className="w-30 h-30 text-white font-thin " />
      </button>
    </div>
  );
};

export default Button;
