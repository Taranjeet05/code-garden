import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-white rounded-2xl md:rounded-3xl rounded-br-[10%] sm:rounded-br-[20%] md:rounded-br-[25%] lg:rounded-br-[30%] shadow-lg p-4 sm:p-6 md:p-8 mx-auto my-4 sm:my-8 md:my-12 lg:my-16 transition-all duration-500">
        <Card />
      </div>
    </div>
  );
}
