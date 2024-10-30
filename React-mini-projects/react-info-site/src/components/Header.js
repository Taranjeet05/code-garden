import React from 'react'
import logo from '../logo192.png'

const Header = () => {
  return (
    <header>
      <nav className='nav'>
      <img className='img' alt='React-logo' src={logo}/>
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>
    </header>
  )
}

export default Header