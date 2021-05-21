import React, { useState, useRef } from 'react';
import { NavButton } from '../NavButton';
import { useClickOutsideDetector } from '../../Hooks';
import './nav-bar.scss';

const BUTTONS = [
  { id: "bio", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "book", label: "Appearances" },
  { id: "enquiries", label: "Enquiries" },
]

export function NavBar(props) {
  const { activeSectionId, setActiveSectionId } = props;
  const [ toggleOpen, setToggleOpen ] = useState(false);
  const navBarRef = useRef()

  useClickOutsideDetector(navBarRef, barToggler)

  return (
    <>
      <nav
        className={ toggleOpen ? 'nav-bar expand' : 'nav-bar collapse' }
        ref={ navBarRef }>
        <button className='nav-bar-toggler' onClick={ barToggler }>
          <i class="fas fa-bars"/>
        </button>
        <span className = 'nav-overflow-wrapper'>
          <span className = 'nav-buttons'>
            {BUTTONS.map((btn) => {
              return <NavButton key={`nav_${btn.id}`} { ...btn }/>
            })}
          </span>
        </span>
      </nav>
    </>
  )

  function barToggler() {
    setToggleOpen(!toggleOpen)
  }
}
