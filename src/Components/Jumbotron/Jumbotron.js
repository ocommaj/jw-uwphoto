import React from 'react'
import './jumbotron.scss'

export function Jumbotron({ children }) {
  return (
    <section className="jumbotron">
      { children }
    </section>
  )
}
