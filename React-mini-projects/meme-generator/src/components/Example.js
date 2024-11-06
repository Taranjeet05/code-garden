import React from 'react'
import { useState } from 'react'

const Example = () => {

  const [thingArray, setThingArray] = useState(['Thing 1']);

  function addItems() {
    setThingArray(prevArray => [...prevArray, `Thing ${prevArray.length + 1 }`])
  }

  return (
    <>
      <button onClick={addItems} >click and Add Item</button>
      {thingArray.map(thing => (<p key={thing}>
        {thing}
      </p>))}
    </>
  )
}

export default Example