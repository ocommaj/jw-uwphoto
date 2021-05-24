import React from 'react';
import './nav-button.scss'

export function NavButton( props ) {
  const { id, label, isActive, setActive, isIcon=false } = props
  const className = !!isActive ? "nav-bar-button active" : "nav-bar-button";

  return (
    <button className={className} onClick={clickHandler}>
      { !isIcon ? label : ( <i className={label}></i>)}
    </button>
  )

  function clickHandler(e) {
    e.stopPropagation()
    !!setActive && setActive(id)
    console.log(`catching click in ${label}`)
  }
}
