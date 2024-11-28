import React, { useState, useEffect } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg', // Default image in the starting
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  // Fetch memes data from the API
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json()) 
      .then((data) => setAllMemeImages(data.data.memes))
      .catch((error) => console.error('Error fetching memes:', error)); 
  }, []); 

  // Get a random meme image
  function getMemeImage(event) {
    event.preventDefault();
    if (allMemeImages.length > 0) {
      const randomNumber = Math.floor(Math.random() * allMemeImages.length);
      const url = allMemeImages[randomNumber].url;
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }));
    }
  }

  // Handle text input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Top-text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom-text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </form>

      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
