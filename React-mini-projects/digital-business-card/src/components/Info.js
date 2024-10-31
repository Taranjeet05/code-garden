import React from 'react'
import ProfilePic from '../Cute-Dog.jpg'

const Info = () => {
  return (
    <>
    <img className='Profile-pic' src={ProfilePic} alt='Cute dogs' width ='500' />
     <div>
     <h1>Taranjeet Singh</h1>
     <h3>Full Stack developer</h3>
     <p>www.singh.website</p>
     </div>
     
     <div>
      <button>Email</button>
      <button>Linkdin</button>
     </div>

    </>
  )
}

export default Info