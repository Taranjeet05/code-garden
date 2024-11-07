import React from 'react'
import { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {

//  const [memeImage, setMemeImage] = useState('');
  const [meme, setMeme] = useState({
    topText:  '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg'
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);



  function getMemeImage (event){
    event.preventDefault();
    const dataArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * dataArray.length);
    const url = dataArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
      
    }));
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
    <img className='meme--image' src={meme.randomImage} alt='meme-img' /> 
    </main>

  )
}

export default Meme