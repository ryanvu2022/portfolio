import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then(data => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0} ]);

    setTimeout(() => {
      setAnimateCard([ {y: 0, opacity: 1} ])
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)));
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text"><span>Projects</span></h2>
      <div className="work-filter">
        {["HTML & CSS", "JavaScript", "React", "Node.js", "Python", "MongoDB", "All"].map((item, index) => (
          <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
          >
            {item}
          </div>         
        ))}
      </div>

      <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="project" key={index}>
            <div className="body">
                <div className="front">
                  <img src={urlFor(work.imgUrl).url()} alt={work.name}/>  
                </div>
                <div className="back">
                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                    <p>{work.techStack}</p>   
                    <section>
                      <button><a href={work.projectLink} target="_blank" rel="noreferrer">Live</a></button>               
                      <button><a href={work.codeLink} target="_blank" rel="noreferrer">Code</a></button>    
                    </section>                                    
                  </div>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, "app__work"),
  "work",
  "app__whitebg"
);
