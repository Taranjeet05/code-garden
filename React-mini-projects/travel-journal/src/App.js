import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './Data'

function App() {

  const Cards = data.map (item => {
    return (
      <Card
      key={item.id}
      {...item} 
      />
    )
  })
  


  return (
    <div>
      <Header />
      {Cards}
    </div>
  );
}

export default App;
