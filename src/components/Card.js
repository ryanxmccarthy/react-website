import React from 'react';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link'>
                <figure className='cards__item__pic-wrap'>
                    img.cards__item__img   
                </figure>
            </Link>
        </li>
    </>;
  )
}

export default Card;
