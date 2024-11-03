import React from 'react'

const Card = () => {
  return (
    <>
        <section className='card'>
          <div className='img--div'>
            <img  src='https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt ='Mount fuji'/>
          </div>

          <div className='card--info'>
            <small className='card--location'>📍location</small>
            <a href='https://goo.gl/maps/1YdB7t3KQmF2' className='map--url' target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>

            <h2>Mount Fuji</h2>
            <small className='trip--date'>12 jan,2023 - 24 jan,2023</small>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

        </div>
      </section>
  </>
  )
}

export default Card