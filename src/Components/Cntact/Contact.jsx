import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id='contact' className='contact-us-container'>
   <h2 className='title'>Get In Touch</h2>
   <div className='contact-detail'>
    <form className='contact-form'>
            <input className='field' type = 'text' name='name' id='name' placeholder='Name'></input>
            <input className='field' type = 'text' name='email' id='email' placeholder='Email'></input>
            <textarea  className='field' name='message'  id ='message' rows='5' placeholder='Message' style={{resize:'none'}}></textarea>
            <button className='submit-btn'>Submit</button>
    </form>
    <div className='contact-information'>
        <div className='title'>
            <p>Where to Find Us</p>
        </div>

        <div className='icon-text'>
            <FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon>
            <span>chennai</span>
        </div>

        <a href='mailto:ztechforall@gmail.com'>
            <div className='icon-text'>
            <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
            <span>all@gmail.com</span>
            </div>
        </a>
        <a href='tel:+251945673412'>
        <div className='icon-text'>
            <FontAwesomeIcon className='icon' icon={faPhone}></FontAwesomeIcon>
            <span>+2519452</span>
        </div>   
        </a>     
     </div>
   </div>
    </section>
  )
}

export default Contact