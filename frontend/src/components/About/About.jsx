import React from "react";
import "./About.scss";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

function About() {
  return (
    <>
      <h2 className="head-text"><span>About Me</span></h2>
      <p className="story">
        My background is not tech at all. In fact, I have both my Bachelor's Degree and Master's Degree in Business Administration. Basically, I had been in business industry for most of my life.
      </p>
      <div className="breaker">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>    
      <p className="story">
        I was feeling not so great about the job that I had been doing when I lived in the US. That's when I decided to move to Canada. Unfortunately, that was when Covid hit the world. As many other people, I struggled and faced countless challenges of building a new life here in Canada. Then, I was lucky enough to find something that brings me so much joy and guides me to a very new and exciting path - coding. 
      </p>
      <div className="breaker">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> 
      <p className="story">
        My journey started when I decided to study Computer Science at Mohawk College - Hamilton, Ontario. It was 100% virtual learning due to Covid, but I see it as a great opportunity for me to spend more time studying and building things. The knowledge I have gained from amazing professors at Mohawk and all of the individual and group assignments I have done really helped me build a strong foundation. Starting from just creating a simple website, my curiosity has led me through a journey of learning and challenging myself in building well-tested and meaningful application, as well as solving difficult problems.
      </p>
      <div className="breaker">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> 
      <p className="story">
        Graduated from Mohawk College with Dean's Lists, I have been continuously learning many courses from online learning plarforms such as Udemy, freeCodeCamp, etc. and practicing by building many projects, which makes me confident in developing web applications using the latest technologies such as: HTML, CSS, Sass, EJS, Tailwind CSS, Material-UI, JavaScript, React, Redux, Axios, Python, Node.js, Express, TypeScript, MongoDB, MySQL, PostgreSQL, etc. I am always very excited to build projects that can benefit society and make people's lives better.
      </p>
      <div className="breaker">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> 
      <p className="story">
        Outside coding, I love going on a road trip. I have done several road trips in Canada since I came here. The longest and the most memorable one happened last summer when I drove from Toronto to Quebec City. It took me 12 days to drive and discover the city, but it was really worth it. If you ever find yourself wandering the streets of Quebec City, try some <em><strong>poutine</strong></em> and <em><strong>donuts</strong></em> there. You won't regret it!
      </p>
      
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);