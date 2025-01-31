import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-5 mx-auto border-b-2 border-green-900">
      <Link
        href="/"
        className="text-2xl font-mono hover:text-slate-400 active:text-green-200"
      >
        <h1>Home</h1>
      </Link>
      <div className="flex gap-10">
        <Link
          href="/performance"
          className="text-lg font-mono hover:text-slate-400 active:text-green-200"
        >
          Performance
        </Link>
        <Link
          href="/reliabilty"
          className="text-lg font-mono hover:text-slate-400 active:text-green-200"
        >
          Reliability
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
