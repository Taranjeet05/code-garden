import React from "react";

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
      </main>
    </>
  );
};

export default Home;
