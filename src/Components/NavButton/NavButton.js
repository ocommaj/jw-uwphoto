import React from 'react';
import './nav-button.scss'

export function NavButton( props ) {
  const { label } = props

  return (
    <button className="nav-bar-button" onClick={clickHandler}>{label}</button>
  )

  function clickHandler(e) {
    e.stopPropagation()
    console.log(`catching click in ${label}`)
  }
}
