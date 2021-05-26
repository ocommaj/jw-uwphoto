import React from 'react'
import { Jumbotron } from '../../Components';
import './contact-section.scss';

export function ContactSection() {
  return (
    <Jumbotron props={ { className: "contact-section" } }>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="name@domain.tld"/>
        <label htmlFor="location">Location</label>
        <input id="location" type="text" placeholder="Location"/>
        <label htmlFor="message">Message</label>
        <textarea id="message" resize="none" rows={5} placeholder="Message"/>
        <button>Submit</button>
      </form>
    </Jumbotron>
  )
}
