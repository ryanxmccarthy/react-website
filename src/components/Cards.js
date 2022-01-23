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
              text='Explore the hidden waterfall deep inside the Amazon jungle'
              label='Adventure'
              path='/services'
            />
            <Card 
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Card 
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon jungle'
              label='Adventure'
              path='/services'
            />
            <Card 
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <Card 
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
  </div>;
}

export default Cards;