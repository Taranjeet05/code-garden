import React from 'react'

const Example = () => {
  const thingsArray = ['Thing 1', 'Thing 2']

  const thingsElements = thingsArray.map(thing => {
    return <p key={thing}>{thing}</p>;
  });

function handelClick () {
  const newThing = `thing ${thingsArray.length + 1}`;
  thingsArray.push(newThing);
  console.log(thingsArray);
}

  return (
    <>
      <button onClick={handelClick}>Add item</button>
      {thingsElements}
    </>
  )
}

export default Example
