import React from 'react';
import { NavButton } from '../Components';

const BUTTONS = [
  { id: "bio", label: "Bio" },
  { id: "gallery", label: "Gallery" },
  { id: "book", label: "Appearances" },
  { id: "enquiries", label: "Enquiries" },
]

export function NavBar() {
  return (
    <>
      <nav>
        { BUTTONS.map(btn => <NavButton key={`nav_${btn.id}`} props={btn}/>) }
      </nav>
    </>
  )
}
