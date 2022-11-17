import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query)
    .then(data => {
      setSkills(data);
    })
  }, [])

  return (
    <>
      <h2 className="head-text"><span>Skills</span></h2>
      <h2 className="sub-skill">Front End Focused <br/> With Full Stack Experience</h2>
      <div className="container">
        
        <motion.div className="list">
          {skills.map( skill => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="item app__flex"
              key={skill.name}
            >
              <div className="app__flex">
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </>

  )
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
