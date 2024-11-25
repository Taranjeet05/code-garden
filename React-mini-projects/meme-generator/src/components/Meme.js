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

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value,
    }))
  }

  return (
    <main>
      <form>
        <input type='text'
        placeholder='Top-text'
        name = 'topText'
        value={meme.topText}
        onChange={handleChange}
        />
    
        <input type='text'
        placeholder='Bottom-text'
        name='bottomText'
        value={meme.bottomText}
        onChange={handleChange}
        />

        <button onClick={getMemeImage}>Get a new meme Image🖼️</button>
    </form>
    
    <div className='meme'>
    <img className='meme--image' src={meme.randomImage} alt='meme-img' /> 
    <h2 className='meme-text top'>{meme.topText}</h2>
    <h2 className='meme-text bottom'>{meme.bottomText}</h2>
    </div>
    </main>

  )
}

export default Meme