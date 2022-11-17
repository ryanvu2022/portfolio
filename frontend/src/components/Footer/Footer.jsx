import React, { useState } from "react";
import './Footer.scss';
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { client } from "../../client";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name] : value
      };
    });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then (() => {
        setLoading(false);
        setIsSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text"><span>Contact Me</span></h2>
      
      {!isSubmitted ? 
        <div className="form">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />          
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" name="message" value={message} onChange={handleChangeInput}/>
          </div>
          <button className="submit p-text" type="button" onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
        </div>
      :
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      }

      <div className="contact-me">
         <div>
            <a href="mailto:ryanvu2022@gmail.com">
               <MdEmail />
            </a>
         </div>
         <div >
            <a href="https://www.linkedin.com/in/ryanvu1012/" target="_blank" rel="noreferrer">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="tel:+16473857006">
               <BsTelephoneFill />
            </a>
         </div>
         <div>
            <a href="https://github.com/ryanvu2022" target="_blank" rel="noreferrer">
               <BsGithub />
            </a>
         </div>
      </div>   

      <div className="copyright">
        <p className="p-text"><span><AiOutlineCopyrightCircle /></span> {new Date().getFullYear()} Ryan Vu</p>
        <p className="p-text">All rights reserved</p>
      </div>  
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__secondarybg"
);
