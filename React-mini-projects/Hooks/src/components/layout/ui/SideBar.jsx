import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gray-500 p-5 rounded-lg h-screen w-2/4 fixed top-30 right-1">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-6xl font-bold mb-4 text-center text-gray-900 hover:text-gray-950 ">
          Pages
        </h2>
      </div>
      <ul className="space-y-4 cursor-pointer underline underline-offset-8 ml-8">
        <li>
          <NavLink
            to="/"
            className="text-gray-800 hover:text-gray-600 text-4xl"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useEffect"
            className="text-gray-800 hover:text-gray-600 text-4xl"
          >
            UseEffect
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
