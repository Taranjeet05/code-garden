import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        ToDo
      </h1>
      <Link to="/profile">
      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
        <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
        <AvatarFallback className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          CN
        </AvatarFallback>
      </Avatar>
      </Link>
    </div>
  );
};

export default Header;
