import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <>
        <section className='card'>
          <div className='img--div'>
            <img  src={props.imageUrl} alt ={props.title}/>
          </div>

          <div className='card--info'>
            <small className='card--location'>📍{props.location}</small>
            <a href={props.googleMapsUrl} className='map--url' target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>

            <h2>{props.title}</h2>
            <small className='trip--date'>{props.startDate} - {props.endDate}</small>
            <p>
              {props.description}
            </p>
        </div>
      </section>
  </>
  )
}

export default Card