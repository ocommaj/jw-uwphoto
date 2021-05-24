import React from 'react';
import './nav-button.scss'

export function NavButton( props ) {
  const { label, isIcon=false } = props

  return (
    <button className="nav-bar-button" onClick={clickHandler}>
      { !isIcon ? label : ( <i className={label}></i>)}
    </button>
  )

  function clickHandler(e) {
    e.stopPropagation()
    console.log(`catching click in ${label}`)
  }
}
