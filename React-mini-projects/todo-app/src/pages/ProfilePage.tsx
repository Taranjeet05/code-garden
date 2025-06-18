import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center border border-gray-200 relative">
        {/* Back Arrow using Link */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-gray-600 hover:text-black transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        {/* Avatar */}
        <div className="relative mx-auto w-28 h-28 overflow-hidden rounded-full border-4 border-gray-200 transition-transform transform hover:scale-105">
          <Avatar className="w-full h-full">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback className="text-3xl bg-gray-200 text-gray-800">
              CN
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name & Email */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Taranjeet Singh</h2>
          <p className="text-gray-500 text-sm mt-1">
            taranjeetsinghtanu2@gmail.com
          </p>
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <Button
            variant="destructive"
            className="w-full bg-red-500 text-white text-lg py-3 rounded-lg font-semibold tracking-wider shadow-md hover:bg-red-600 transition"
          >
            Log Out 🚀
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
