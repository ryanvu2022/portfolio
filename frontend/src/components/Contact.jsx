import React from "react";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
   return (
      <div className="app__contact">
         <div>
            <a href="mailto:ryanvu2022@gmail.com" data-tool-tip="Email">
               <MdEmail />
            </a>
         </div>
         <div >
            <a href="https://www.linkedin.com/in/ryanvu1012/" data-tool-tip="LinkedIn" target="_blank" rel="noreferrer">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="tel:+16473857006" data-tool-tip="Phone">
               <BsTelephoneFill />
            </a>
         </div>
         <div>
            <a href="https://github.com/ryanvu2022" data-tool-tip="GitHub" target="_blank" rel="noreferrer">
               <BsGithub />
            </a>
         </div>
      </div> 
   )
}

export default Contact;