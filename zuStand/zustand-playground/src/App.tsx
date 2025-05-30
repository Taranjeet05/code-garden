import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-cyan-950 text-white h-screen">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
