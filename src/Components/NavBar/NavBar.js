import React, { useState, useRef } from 'react';
import { NavButton } from '../NavButton';
import { useClickOutsideDetector } from '../../Hooks';
import './nav-bar.scss';

const MENUS = {
  topNav: {
    glyph: { name: "fas fa-bars", size: 64 },
    buttons: [
      { id: "bio", label: "About" },
      { id: "gallery", label: "Gallery" },
      { id: "book", label: "Appearances" },
      { id: "contact", label: "Enquiries" }
    ]
  },
  socials: {
    glyph: { name: "fas fa-at", size: 48 },
    buttons: [
      { id: "fb", label: "fab fa-facebook-square", isIcon: true },
      { id: "tw", label: "fab fa-twitter-square", isIcon: true },
      { id: "ig", label: "fab fa-instagram-square", isIcon: true }
    ]
  }
}

export function NavBar(props) {
  const { id, navState=null } = props;
  const [ toggleOpen, setToggleOpen ] = useState(false);
  const navBarRef = useRef()

  const menu = MENUS[id]
  const { buttons } = menu
  const { active, setActive } = !!navState && navState
  const className = !!toggleOpen ? 'nav-bar expand' : 'nav-bar collapse'

  useClickOutsideDetector(navBarRef, clickOutside)

  return (
    <>
      <nav className={ className } ref={ navBarRef }>
        <button className='nav-bar-toggler' onClick={ barToggler }>
          <i className={ menu.glyph.name }/>
        </button>
        <span className = 'nav-overflow-wrapper'>
          <span className = 'nav-buttons'>
            { buttons.map((btn) =>
              <NavButton
                key={`nav_${btn.id}`}
                isActive={ !!active && btn.id === active }
                setActive={ !!setActive && setActive }
                { ...btn }
                /> )
            }
          </span>
        </span>
      </nav>
    </>
  )

  function barToggler() {
    setToggleOpen(prevState => !prevState)
  }

  function clickOutside() {
    if (!toggleOpen) return
    setToggleOpen(pastState => !pastState)
  }
}
