import React from 'react'
import { createPortal } from 'react-dom'
import './image-portal.scss'

export function ImagePortal(props) {
  const { imgUrl } = props;

  return createPortal(
    <div className='image-details-portal'>
      <div className='fullsize-portal-img'>
        <img src={ imgUrl } alt='red sea pony'/>
      </div>
    </div>,
    document.getElementById('portal-root')
  )
}
