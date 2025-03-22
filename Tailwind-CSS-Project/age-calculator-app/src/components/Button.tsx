import React from "react";
import Image from "next/image";

const Button = () => {
  return (
    <div className="relative mt-16">
      <hr className="border-gray-200 border-1" />
      <button className="absolute right-0 top-0 mt-4">
        <Image
          src="/assets/images/icon-arrow.svg"
          alt="arrow-right"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};

export default Button;
