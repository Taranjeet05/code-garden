import Tags from "../components/Tags";
import Form from "../components/Form";
import Headers from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full overflow-y-hidden">
        <div className="h-[20%]">
          <Headers />
        </div>
        <div className="">
          <Form />
          <Tags />
        </div>
      </div>
    </>
  );
}
