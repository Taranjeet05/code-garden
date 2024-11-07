import React from 'react'
import { useState } from 'react';

const ObjectState = () => {

  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Deo',
    phone: '+1 (719) 555-1212',
    email: 'taranjeetsinghtanu2@gmail.com',
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? <h1>⭐⭐✨</h1> : <h1>👎👎</h1>

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }));
  }

  return (
    <main>
      <article>
        <div>
          <h1 onClick={toggleFavorite} >{starIcon}</h1>
        </div>

        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>

      </article>
    </main>
  )
}

export default ObjectState