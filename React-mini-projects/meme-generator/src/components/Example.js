import React from 'react'
import { useState } from 'react';

const Example = () => {

  const [indiansArray, setIndiansArray] = useState([`Vande Mataram`]);

  function addList() {
    setIndiansArray(prevArray => [...prevArray, `Vande Mataram.. ${prevArray.length + 1}`]);
  }

  const Element = indiansArray.map(list=> (
    <p key={list} >{list} </p>
  ))

  return (
    <>
      <button onClick={addList} >Click me to add more...</button>
      {Element}
    </>
  )
}

export default Example