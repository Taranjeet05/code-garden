import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); 
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}> 
      <Header toggleTheme={toggleTheme} /> 
      <h1 className='heading'>Fun facts about React</h1>
      <ul className='points'>
        <li>was first released in 2013</li>
        <li>was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
