import React, { useEffect, useState, useRef } from 'react'
import { ImagePortal } from '../ImagePortal'
import './image-card.scss'

import TEST_IMG from '../../Assets/images/RedSeaHorseSample.jpg';

export function ImageCard() {
  const [ showFullView, setShowFullView ] = useState(false)
  const [ topClassName, setTopClassName ] = useState('image-card-circle')
  const offsetRef = useRef()

  useEffect(() => {
    const newClass = !!showFullView
      ? 'image-card-circle active-select'
      : 'image-card-circle'

    setTopClassName(newClass)
  }, [showFullView])

  return (
    <>
    <div className='image-card-wrapper'>
      <div className={ topClassName } onClick={ clickExpander}>
        <div className='image-card-img-front'>
          <img src={TEST_IMG} alt='red sea pony'/>
        </div>
        <ul className='image-card-back-details'>
          <li>Red Sea Horse</li>
          <li className='icon-right-list-item'>
            <span>West Palm Beach, FL</span>
            <i className="fas fa-map-marker-alt"
              style={ { color: '#ec3750' } }/>
          </li>
          <li>50mm, f8.0, 1/500, ISO 1000</li>
        </ul>
      </div>
      <div className='active-backdrop' ref={ offsetRef }/>
    </div>
    { showFullView && <ImagePortal imgUrl={TEST_IMG} /> }
    </>
  )

  function clickExpander() {
    setShowFullView(!showFullView)
  }

  /*function updateOffset() {
    if (!showFullView) return
    //{ transform: `translate(0, 0)` }
    const wrapperRect = offsetRef.current.getBoundingClientRect()
    const topPos = wrapperRect.top
    const leftPos = wrapperRect.left
    console.log(`offsetTop: ${topPos}`)
    console.log(`offsetLeft: ${leftPos}`)
    return { transform: `translate(-${topPos}px -${leftPos}px)`}
  }*/
}

//<ImageDetails imgSrc={ TEST_IMG }/>
