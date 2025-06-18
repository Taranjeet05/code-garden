import React from 'react'
import logo from '../assets/images/airbnb-logo-png-is-airbnb-safe-what-the-homestay-app-does-to-make-hosts-and-guests-secure-in-their-use-780.png'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt='airbnb-logo' className='logo'/>
    </nav>
  )
}

export default Navbar