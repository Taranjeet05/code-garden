import { NavLink } from "react-router-dom";
import navigationLinks from "../data/navigationLinks";

const Links4Pages = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-10 p-3 text-white w-1/2 mx-auto bg-gray-800 font-mono text-2xl mb-24">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links4Pages;
