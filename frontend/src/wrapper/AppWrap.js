import React from "react";
import { NavigationDots, Contact } from "../components";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <Contact />
      <div className="app__wrapper app__flex">
         <Component />

         <div className="copyright">
            <p className="p-text"><span><AiOutlineCopyrightCircle /></span> {new Date().getFullYear()} Ryan Vu</p>
            <p className="p-text">All rights reserved</p>
         </div>
         
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap;