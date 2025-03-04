import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-5xl text-center font-mono m-2 font-bold">
            Home Page
          </h1>
        </div>
        <div className="col-span-1">
          <Button>New Topic</Button>
        </div>
      </div>
    </>
  );
}
