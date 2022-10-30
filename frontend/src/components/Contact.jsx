import React from "react";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
   return (
      <div className="app__contact">
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
   )
}

export default Contact;