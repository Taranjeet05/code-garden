import { Home, LucideIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Header = () => {
  interface Links {
    id: number;
    text: string;
    icons: LucideIcon;
    href: string;
  }

  const links: Links[] = [
    { id: 1, text: "Home", icons: Home, href: "/" },
    { id: 2, text: "Cart", icons: ShoppingBag, href: "/cart" },
  ];

  return (
    <div className="flex items-center justify-between p-3 mr-4">
      <h1 className="text-xl sm:text-3xl font-bold">
        E-<span className="text-green-600 italic">Commerce</span> App
      </h1>

      <div className="flex items-center gap-4">
        {links.map((link) => {
          const Icon = link.icons;
          return (
            <div
              key={link.id}
              className="text-lg sm:text-xl font-mono cursor-pointer transition-all scale-105 duration-500 hover:text-green-600"
            >
              <Link href={link.href} className=" flex items-center gap-2.5 ">
                <Icon size={20} /> <span>{link.text}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
