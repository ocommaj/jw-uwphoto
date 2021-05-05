import React, { useState } from 'react';
import { NavButton } from '../Components';
import '../Styles/Containers/_nav-bar.scss';

const BUTTONS = [
  { id: "bio", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "book", label: "Appearances" },
  { id: "enquiries", label: "Enquiries" },
]

export function NavBar() {
  const [ toggleOpen, setToggleOpen ] = useState(false);

  return (
    <>
      <nav className={ toggleOpen ? 'nav-bar expand' : 'nav-bar collapse' }>
        <button className='nav-bar-toggler' onClick={ clickHandler }>
          <i class="fas fa-bars"/>
        </button>
        <span className = 'nav-overflow-wrapper'>
          <span className = 'nav-buttons'>
            {BUTTONS.map((btn) => {
              return <NavButton key={`nav_${btn.id}`} props={btn}/>
            })}
          </span>
        </span>
      </nav>
    </>
  )

  function clickHandler() {
    setToggleOpen(pastState => !pastState)
  }
}
