import "./App.css";
import Header from "./components/Header";
import NewTaskButton from "./components/NewTaskButton";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <hr className="h-px my-0.5 bg-gray-200 border-0 " />
      <NewTaskButton />
      <TodoList />
    </>
  );
}

export default App;
