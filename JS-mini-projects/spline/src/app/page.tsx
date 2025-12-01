import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%] py-2">
        {/* Left Section */}
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-5xl my-4 text-gray-100 uppercase">Testing Spline </h2>
          <p className="text-xs text-indigo-200 ">
            NEXBOT - robot character concept
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <Spline
            className=" rounded-2xl"
            scene="https://prod.spline.design/3YHRi8StqC13Zlhi/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
}
