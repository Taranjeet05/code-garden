import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-2">
      <p className="text-2xl text-center mt-5 mb-7">Smart Grocery</p>
      <div className="max-w-2xl mx-auto sm:max-w-7xl">
        <Form />
      </div>
    </div>
  );
}
