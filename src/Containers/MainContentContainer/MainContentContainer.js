import React from 'react'
import './main-content-container.scss'

export function MainContentContainer({ children }) {
  return (
    <main className="main-content-container">
      { children }
    </main>
  )
}
