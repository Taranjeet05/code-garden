import "./App.css";
import Header from "./components/Header";
import NewTaskButton from "./components/NewTaskButton";

function App() {
  return (
    <>
      <Header />
      <hr className="h-px my-0.5 bg-gray-200 border-0 " />
      <NewTaskButton />
    </>
  );
}

export default App;
