import React from 'react'
import './image-card.scss'

import TEST_IMG from '../../Assets/images/RedSeaHorseSample.jpg';

export function ImageCard() {


  return (
    <div className='image-card-circle'>
      <div className='image-card-img-front'>
        <img src={TEST_IMG} alt='red sea pony'/>
      </div>
      <ul className='image-card-back-details'>
        <li>Red Sea Horse</li>
        <li className='icon-right-list-item'>
          <span>West Palm Beach, FL</span>
          <i className="fas fa-map-marker-alt" style={ {color: '#ec3750' } }/>
        </li>
        <li>50mm, f8.0, 1/500, ISO 1000</li>
      </ul>
    </div>
  )
}
