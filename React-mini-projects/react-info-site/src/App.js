import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header/>
      <h1 className='heading'>Fun facts about React</h1>
      <ul className='points'>
        <li>was first realesed in 2013</li>
        <li>was originally created by jordan walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Footer/>
    </>
  );
}

export default App;

