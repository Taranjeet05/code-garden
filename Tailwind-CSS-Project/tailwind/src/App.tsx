import { Moon, Sun, TextAlignJustify } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} min-h-screen dark:bg-background-dark bg-background-light`}>
      {/* NavBar */}
      <div className="flex justify-between items-center text-slate-900 dark:bg-background-nav-dark dark:text-white h-15 px-5">
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold font-mono">LOGO</h1>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden italic sm:flex gap-5 justify-center items-center text-xl font-bold">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <button
          className="sm:hidden text-xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TextAlignJustify />
        </button>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="sm:hidden italic flex flex-col gap-5 justify-center items-end p-5 text-xl font-bold text-slate-800 dark:bg-background-nav-dark dark:text-white">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-6 text-white text-center font-extrabold text-2xl sm:text-lg">
        <div className="bg-slate-600 p-7 rounded hover:bg-slate-900 hover:scale-103 transition-all duration-500">
          Feature 1
        </div>
        <div className="bg-teal-600 p-7 rounded hover:bg-teal-900 hover:scale-103 transition-all duration-500">
          Feature 2
        </div>
        <div className="bg-green-600 p-7 rounded hover:bg-green-900 hover:scale-103 transition-all duration-500">
          Feature 3
        </div>
        <div className="bg-blue-600 p-7 rounded hover:bg-blue-900 hover:scale-103 transition-all duration-500">
          Feature 4
        </div>
        <div className="bg-purple-600 p-7 rounded hover:bg-purple-900 hover:scale-103 transition-all duration-500">
          Feature 5
        </div>
        <div className="bg-yellow-600 p-7 rounded hover:bg-yellow-900 hover:scale-103 transition-all duration-500">
          Feature 6
        </div>
      </div>
    </div>
  );
};

export default App;
