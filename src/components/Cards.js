import React from 'react';
import Card from './Card'

function Cards() {
  return <div className='cards'>
      <h1>Check out these epic destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card />
          </ul>
        </div>
      </div>
  </div>;
}

export default Cards;
