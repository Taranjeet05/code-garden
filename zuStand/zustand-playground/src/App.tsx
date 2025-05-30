import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header"

function App() {
  return (
    <div className="bg-black text-white h-screen">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
