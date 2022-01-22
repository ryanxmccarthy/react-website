import React from 'react';
import Card from './Card'
import './Cards.css'

function Cards() {
  return <div className='cards'>
      <h1>Check out these epic destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card 
              src='images/img-9.jpg'
              text='Explore the hidden watterfall deep inside the Amazon jungle'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
  </div>;
}

export default Cards;