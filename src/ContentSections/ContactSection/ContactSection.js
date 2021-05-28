import React from 'react'
import { Jumbotron } from '../../Components';
import './contact-section.scss';

export function ContactSection() {
  return (
    <Jumbotron props={ { className: "contact-section" } }>

      <form className="contact-form">
      <h2>Drop me a line.</h2>
        <label className="styled-label" htmlFor="name" aria-label="Name">
          <input
            className="styled-input"
            id="name"
            type="text"
            placeholder="&nbsp;"/>
          <span class="placeholder">Name</span>
        </label>
        <label className="styled-label" htmlFor="email" aria-label="Email">
          <input
            className="styled-input"
            id="email"
            type="text"
            placeholder="&nbsp;"/>
          <span class="placeholder">Email</span>
        </label>
        <label className="styled-label" htmlFor="location" aria-label="Location">
          <input
            className="styled-input"
            id="location"
            type="text"
            placeholder="&nbsp;"/>
          <span class="placeholder">Location</span>
        </label>
        <label className="styled-label" htmlFor="message" aria-label="Message">
          <textarea className="styled-input" id="message" placeholder="&nbsp;" rows={5}/>
          <span class="placeholder">Message</span>
        </label>
        <button>Submit</button>
      </form>
    </Jumbotron>
  )
}
