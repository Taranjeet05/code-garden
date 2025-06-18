import React from 'react'
import ProfilePic from '../Cute-Dog.jpg'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';


const Info = () => {
  return (
    <>
    <div className='pic-div'>
    <img className='Profile-pic' src={ProfilePic} alt='Cute dogs' width ='500' />
    </div>

     <div className='info-div'>
     <h1>Taranjeet Singh</h1>
     <h3>Full Stack developer</h3>
     <p>www.singh.website</p>
     </div>
     
     <div className='buttons-div'>
     <button>
        <FaEnvelope /> Email
      </button>
      <button>
        <FaLinkedin /> LinkedIn
      </button>
     </div>

    </>
  )
}

export default Info