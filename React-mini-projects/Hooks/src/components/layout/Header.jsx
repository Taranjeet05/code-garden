import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "./ui/SideBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between bg-emerald-100 p-10">
        <h1 className="font-bold text-4xl   ">
          <NavLink to="/" className="text-emerald-800 hover:text-emerald-600">
            Hook's world
          </NavLink>
        </h1>
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-emerald-800 hover:text-emerald-600 font-serif "
          >
            {open ? (
              "close ✖️"
            ) : (
              <>
                Navigate Pages <span className="">🔍</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div>{open && <SideBar />}</div>
    </div>
  );
};

export default Header;
