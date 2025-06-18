import { headerLogo } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { hamburger } from "@/public/assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href={"/"}>
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-Montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Image 
          src={hamburger}
          alt="Hamburger"
          width={25}
          height={25}
          className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
