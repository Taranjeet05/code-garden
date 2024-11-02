import React from 'react'
import Star from '../assets/images/Star 1.png'

const Card = ({img, rating, reviewCount, location, title, price}) => {


  return (
    <div className='card'>
      <img src={img} alt={title} className='card--image'/>
      <div className='card--stats'>
        <img className='card--star' src={Star} alt='star-img' />
        <span className='grey'>{rating}</span>
        <span className='grey'>({reviewCount}) • </span>
        <span>{location}</span>
      </div>
      <p className='card--title'>{title}</p>
      <p><span className='bold'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card

