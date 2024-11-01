import React from 'react'
import Image from '../assets/images/image 12.png'
import Star from '../assets/images/Star 1.png'

const Card = () => {
  return (
    <div className='card'>
      <img src={Image} alt='Katie.png' className='card--image'/>
      <div className='card--stats'>
        <img className='card--star' src={Star} alt='star-img' />
        <span className='grey'>5.0</span>
        <span className='grey'>(6) • </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}

export default Card