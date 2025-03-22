export default function Home() {
  return (
    <div>
      <h1 className="text-center font-mono text-2xl">Hello, Testing...</h1>
      <p className="text-center mt-5 font-bold bg-purple-400">
        Testig the font poppins.
      </p>
      <div className="flex flex-col gap-2 p-4">
        <div className="h-8 w-full bg-[hsl(259,100%,65%)]">Purple</div>
        <div className="h-8 w-full bg-[hsl(0,100%,67%)]">Light Red</div>
        <div className="h-8 w-full bg-[hsl(0,0%,8%)]">Off Black</div>
      </div>
    </div>
  );
}
