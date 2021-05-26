import React from 'react'
import './jumbotron.scss'

export function Jumbotron({ props, children }) {
  const { className } = props
  return (
    <section className={ `jumbotron ${className}` }>
      { children }
    </section>
  )
}
