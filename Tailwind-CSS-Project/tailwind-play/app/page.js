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
      </main>
    </>
  );
};

export default Home;
