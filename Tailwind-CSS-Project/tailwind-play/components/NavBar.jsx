import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-violet-600 mt-5 flex  items-center h-20 p-2">
      <Image
        src={"/favicon.ico"}
        alt="logo"
        width={50}
        height={50}
        herf="/"
        className="hover:cursor-pointer"
      />
      <div className="flex justify-end w-full">
        <ul
          className="hidden md:flex text-white font-mono font-extrabold gap-10 px-10 hover:cursor-pointer"
          aria-label="Main Navigation"
        >
          <li className="hover:text-gray-300">Home</li>
          <li className="hover:text-gray-300">About</li>
          <li className="hover:text-gray-300">Contact</li>
        </ul>
        <div>
          <button className="block md:hidden bg-teal-500 p-2 rounded-md hover:cursor-pointer text-white font-mono font-extrabold">
            Dropdown Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
