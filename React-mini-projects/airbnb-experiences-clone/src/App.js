import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from '../src/data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id} 
        img={item.coverImg}
        rating={item.rating}
        reviewCount={item.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
