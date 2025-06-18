import React from 'react';
import logo from '../logo192.png';

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <nav className='nav'>
        <img className='img' alt='React-logo' src={logo} />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>Toggle Theme</button> {/* Button for theme toggle */}
      </nav>
    </header>
  );
};

export default Header;
