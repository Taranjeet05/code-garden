import Image from "next/image";
import { arrowRight } from "@/public/assets/icons";

const Button = ({ label }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-Montserrat text-lg leading-none bg-coral-red border-coral-red rounded-full text-white">
      {label}
      <Image
        src={arrowRight}
        alt="Arrow Right icon"
        width={50}
        height={50}
        className="ml-2 w-5 h-5 rounded-full"
      />
    </button>
  );
};

export default Button;
