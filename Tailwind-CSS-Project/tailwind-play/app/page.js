import DarkModeToggle from "@/components/DarkModeToggle";
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
        <DarkModeToggle />
        {/* Tailwind CSS Custom Styles Demonstration */}
        {/* Special button with custom styles defined in global.css */}
        <button className="special-button">special-button</button>
        {/* There are two ways to apply custom styles in Tailwind CSS: */}
        {/* 1. Using inline custom styles directly in the component */}
        <p className="text-2xl font-mono text-[#973F29] bg-stone-200 p-2 my-4">
          ChestNut Color
        </p>
        {/* 2. Using custom styles defined in the Tailwind config file */}
        <div className="flex flex-col space-y-8 my-6">
          {/* Section: Custom Colors */}
          <div className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              🎨 Custom Colors
            </h2>
            <div className="space-y-4">
              <div className="bg-primary text-white p-6 rounded-xl">
                Primary Background (custom primary color from config)
              </div>
              <div className="bg-secondary text-white p-6 rounded-2xl">
                Secondary Background (custom secondary color from config)
              </div>
            </div>
          </div>

          {/* Section: Custom Font Families */}
          <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              ✍️ Custom Font Families
            </h2>
            <div className="space-y-4">
              <h1 className="font-heading text-4xl">
                Stylish Heading (custom heading font from config)
              </h1>
              <p className="font-sans text-base">
                Modern Sans-serif Paragraph (custom sans font from config)
              </p>
              <code className="font-mono text-sm">
                Code Snippet (custom monospaced font from config)
              </code>
            </div>
          </div>

          {/* Section: Custom Shadows */}
          <div className="p-6 bg-green-50 border border-green-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              🌟 Custom Shadows
            </h2>
            <div className="space-y-4">
              <div className="shadow-custom-light p-4 bg-white rounded-lg">
                Light Shadow (custom light shadow from config)
              </div>
              <div className="shadow-custom-dark p-4 bg-white rounded-lg">
                Dark Shadow (custom dark shadow from config)
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
