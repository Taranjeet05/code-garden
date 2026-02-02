import { Home, LucideIcon, ShoppingBag } from "lucide-react";

const Header = () => {
  interface Links {
    id: number;
    text: string;
    icons: LucideIcon;
  }

  const links: Links[] = [
    { id: 1, text: "Home", icons: Home },
    { id: 2, text: "Cart", icons: ShoppingBag },
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
              className="text-lg sm:text-xl font-mono flex items-center gap-2.5"
            >
              <Icon size={20} /> <span>{link.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
