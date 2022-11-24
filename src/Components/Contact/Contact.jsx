import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {

    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;

    const form = useRef();

    const [done, setDone] =  useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l836rh5', 'template_ftyrjxo', form.current, '5ebhI-fTgiKCmevXe')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <div className="contact-form">
        <div className="c-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
        </div>

        <div className="c-right">
                <form ref={form} onSubmit = {sendEmail}>
                    <input type="text" name='user-name' className='user' placeholder='Name' />
                    <input type="email" name='user-email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message' />
                    <input type="submit" value='send' className='button' />

                    <span>{done && 'Thanks for contacting us!'}</span>

                    <div className="blur c-blur1" style={{background: "var(--purple)"}}>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Contact
