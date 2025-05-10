import Form from "@/components/Form";
import Header from "@/components/Header";
import Tags from "@/components/Tags";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Form />
        <Tags />
      </div>
    </>
  );
}
