import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <>
      <main className="p-5">
        <div className="text-lg text-center text-blue-400">Hello World</div>
        <div className="w-full h-10 bg-violet-200 border-violet-600 border-2 p-2 rounded-md my-4">
          <p className="text-center font-mono font-extrabold">
            This is a div with p tag.
          </p>
        </div>
        {/* Layouts */}
        <div className="fixed w-10 h-10 bg-red-500 top-0"></div>
        {/*displays*/} {/*flex*/}
        <div className="flex justify-between">
          <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
          <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
          <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
        </div>
        {/*grid*/}
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-orange-500 h-12"></div>
          <div className="bg-blue-500 h-12"></div>
          <div className="bg-green-500 h-12"></div>
        </div>
        {/* media queries */}
        <div className="md:block hidden">
          <p>I will appear for devices resolution &gt; 768px</p>
        </div>
        <div className="max-md:block hidden">
          <p>I will appear for devices resolution &lt; 768px </p>
        </div>
        <div className="rounded-md bg-blue-500 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-pink-500 2xl:bg-purple-500">
          <p className="font-mono text-white font-extrabold text-center">
            I change colors based on screen size!
          </p>
        </div>
        {/* NavBar with block and hidden properties */}
        {/*Media query challenge*/}
        <NavBar />
        {/* Tailwind css Hover */}
        <button
          className="my-2 bg-blue-500 py-2 px-4 
        rounded-lg hover:bg-blue-700 text-white font-bold 
        focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800"
        >
          Hover me
        </button>
        <a
          className="block my-2 bg-slate-500 text-white text-center font-mono font-extrabold py-2 px-4
        rounded-lg hover:bg-slate-700 focus:outline-none focus:ring focus-ring-slate-300 active:bg-slate-800
        w-1/2 mx-auto"
          href="#"
        >
          This Link is to check the hover effect.
        </a>
        {/* tailwind First, Odd and Even properties */}
        <ul className="my-5 space-y-2">
          <li className="bg-white p-2 first:bg-yellow-200">Items 01</li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-red-200 even:bg-green-200">
            Items 02
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-red-200 even:bg-green-200">
            Items 03
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-red-200 even:bg-green-200">
            Items 04
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-red-200 even:bg-green-200">
            Items 05
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-red-200 even:bg-green-200">
            Items 06
          </li>
        </ul>
        {/* Tailwind Dark Mode */}
      </main>
    </>
  );
};

export default Home;
