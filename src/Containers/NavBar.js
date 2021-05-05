import React from 'react';
import { NavButton } from '../Components';
import '../Styles/Containers/_nav-bar.scss';

const BUTTONS = [
  { id: "bio", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "book", label: "Appearances" },
  { id: "enquiries", label: "Enquiries" },
]

export function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        { BUTTONS.map(btn => <NavButton key={`nav_${btn.id}`} props={btn}/>) }
      </nav>
    </>
  )
}
