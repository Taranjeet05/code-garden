import "../App.css";
import Counter from "../components/Counter";
import Header from "../components/Header";
import UserDisplay from "../components/UserDisplay";

function App() {
  return (
    <div className="bg-cyan-950 text-white h-screen">
      <Header />
      <Counter />
      <UserDisplay />
    </div>
  );
}

export default App;
