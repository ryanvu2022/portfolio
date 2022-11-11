import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { urlFor, client } from "../../client";

const About =() => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then(data => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text"><span>About Me</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile_item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />            
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      <h2 className="quote">
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure." <br/>
        ― Colin Powell
      </h2>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
