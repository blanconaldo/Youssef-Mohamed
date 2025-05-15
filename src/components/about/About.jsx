// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import ME from "../../assets/Me.jpg";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <p>
          I am Youssef Mohamed, an AI student at Technische Hochschule Deggendorf and Full-Stack Developer, passionate about building intelligent
          solutions that make a real-world impact. With hands-on experience in natural language processing (NLP), machine learning, 
          computer vision and generative AI, I specialize in developing computer vision programs, AI-powered chatbots and automation tools.
          </p>
          <br />

          <p>
          Previously, I built a website for Saspa, a Kuwaiti furniture company, focusing on building their landing page. I also made other machine learning projects like Fashion items classifier and a Canadian port entry prediction model.
          </p>
          <br />

          <p>
          With a strong problem-solving mindset, I actively participate in coding competitions 
          and explore emerging technologies to broaden my understanding of the latest AI and software development advancements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
