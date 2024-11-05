import React from 'react'
import { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {

  const [memeImage, setMemeImage] = useState('');

  function getMemeImage (event){
    event.preventDefault();
    const dataArray = memesData;
    const randomNumber = Math.floor(Math.random() * dataArray.length);
     setMemeImage(dataArray[randomNumber].url)
  }

  return (
    <main>
      <form>
        <input type='text'
        placeholder='Top-text'
        />
    
        <input type='text'
        placeholder='Bottom-text'
        />

        <button onClick={getMemeImage}>Get a new meme Image🖼️</button>
    </form>
    <img className='meme--image' src={memeImage} alt='meme-img' /> 
    </main>

  )
}

export default Meme