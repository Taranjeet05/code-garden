import React from 'react'
import memesData from '../memesData';

const Meme = () => {

   let url;
  function getMemeImage (event){
    event.preventDefault();
    const dataArray = memesData;
    const randomNumber = Math.floor(Math.random() * dataArray.length);
     url = dataArray[randomNumber].url
    console.log(url)
  }

  return (
    <main>
      <p>{url}</p>
      <form>
        <input type='text'
        placeholder='Top-text'
        />
    
        <input type='text'
        placeholder='Bottom-text'
        />

        <button onClick={getMemeImage}>Get a new meme Image🖼️</button>
    </form>
    </main>

  )
}

export default Meme