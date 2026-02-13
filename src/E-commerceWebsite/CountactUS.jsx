import React from 'react'
import './ContactUs.css'
import { useState } from 'react'

const ContactUs = () => {

  //state for contactus detail 
  const[details,setDetails] = useState({})

  return (
    <div>
      <div className="main-contact">
        <h2>Contact Us</h2>

        <div className="main-form">
          <form>
            <label htmlFor="FirstName">First Name</label>
            <input type="text" id="FirstName" name="FirstName" required />

            <label htmlFor="LastName">Last Name</label>
            <input type="text" id="LastName" name="LastName" required />

            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" name="Email" className="Email" required />

            <input type="submit" value="SUBMIT" />
          </form>
        </div>

        <div className="social-icon">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default ContactUs