"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Users, Home, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Users", href: "/users", icon: Users },
    { name: "Map", href: "/map", icon: Map },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 transition-hover">
          <div className="bg-primary p-1.5 rounded-lg">
            <MapPin className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">
            LOCATE ME
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
