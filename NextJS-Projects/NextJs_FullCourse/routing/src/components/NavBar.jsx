import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full bg-green-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        <Link href="/" className="text-3xl font-bold tracking-wide hover:opacity-80 transition-all">
          Next Js15 Routing
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            href="/performance"
            className="text-lg font-medium hover:text-gray-300 transition-all"
          >
            Performance 🚀
          </Link>
          <Link
            href="/reliability"
            className="text-lg font-medium hover:text-gray-300 transition-all"
          >
            Reliability 🛡️
          </Link>
          <Link
            href="/articles"
            className="text-lg font-medium hover:text-gray-300 transition-all"
          >
            Articles 📝
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
