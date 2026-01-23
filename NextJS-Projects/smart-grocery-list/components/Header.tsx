"use client"; // Required for useState in Next.js App Router

import { Home, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface NavLink {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const links: NavLink[] = [
  { name: "Home", link: "/", icon: <Home size={20} /> },
  { name: "Cart", link: "/cart", icon: <ShoppingCart size={20} /> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="z-50">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-600">
            Smart<span className="text-gray-800">Grocery</span>
          </h1>
        </Link>

        {/* Desktop NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-medium transition-all"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Hamburger Button (Visible only on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-gray-700 hover:text-emerald-600 font-medium p-2 rounded-md hover:bg-emerald-50 transition-colors"
            >
              <span className="text-emerald-600">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
