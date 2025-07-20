import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between text-6xl p-5 text-white">
        <NavLink to="/">TanStack</NavLink>
        <nav>
          <ul className="flex space-x-4 text-3xl text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold underline"
                    : "text-gray-300 hover:text-green-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trad"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold underline"
                    : "text-gray-300 hover:text-green-200"
                }
              >
                FetchOld
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rq"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold underline"
                    : "text-gray-300 hover:text-green-200"
                }
              >
                FetchRq
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/infinite"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold underline"
                    : "text-gray-300 hover:text-green-200"
                }
              >
                InfiniteScroll
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
