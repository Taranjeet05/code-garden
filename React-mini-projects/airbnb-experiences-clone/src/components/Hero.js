import React from 'react'
import Image from '../assets/images/Group 77.png'

const Hero = () => {
  return (
    <main>
      <section className='hero'>
        <img  src={Image} alt= 'Collage' className='hero--photo'/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities 
          led by one-of-a-kind hosts-all without leaving home.</p>
      </section>
    </main>
  )
}

export default Hero