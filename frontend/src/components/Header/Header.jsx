import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import AppWrap from "../../wrapper/AppWrap";
import resume from "../../assets/resume/Ryan-Vu-Resume.pdf"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div whileInView={{ x: [-150, 0], opacity: [0, 1] }} transition={{ duration: 1 }} className="info">
        <div className="badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="hello">Hello, I am</p>
              <h1 className="head-text">Ryan</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
              <p>Software Developer</p>
          </div>

          
            <a href={resume} className="resume">
              My Resume
            </a>
          
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, delayChildren: 0.5 }} className="img">
        <img src={images.profile} alt="profile_bg" />
      </motion.div>

      <motion.div variant={scaleVariants} whileInView={scaleVariants.whileInView} className="circles">
        {[images.python, images.react, images.node].map((circle, index) => (
          <div className="app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, "home");