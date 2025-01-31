import Link from "next/link";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center bg-gray-50">
      <h1 className="text-4xl font-bold text-green-900 md:text-5xl">
        Exploring Routing in Next.js
      </h1>
      <p className="mt-4 text-lg text-gray-700 md:w-3/4">
        Next.js provides a powerful and flexible routing system with **static,
        dynamic, and nested routes**. Learn more about the **performance** and
        **reliability** of Next.js routing by exploring the sections below.
      </p>
      <div className="mt-6 flex gap-5">
        <Link
          href="/performance"
          className="px-6 py-3 text-white bg-green-700 rounded-lg shadow-md hover:bg-green-800 transition-all"
        >
          Learn About Performance 🚀
        </Link>
        <Link
          href="/reliability"
          className="px-6 py-3 text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 transition-all"
        >
          Discover Reliability 🛡️
        </Link>
        <Link
          href="/articles/nextjs-routing"
          className="px-6 py-3 text-white bg-green-700 rounded-lg shadow-md hover:bg-green-800 transition-all"
        >
          Learn About Next.js Routing 🚀
        </Link>
        <Link
          href="/articles/server-components"
          className="px-6 py-3 text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 transition-all"
        >
          Discover Server Components 🛠️
        </Link>
      </div>
    </div>
  );
};

export default Home;
