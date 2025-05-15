// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Skills.css";
import { HiBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Proficiency</h2>
      <div className="container skills__container">
        <div className="skill__frontend">
          <h3>Artificial Intelligence & Machine Learning</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Artificial Intelligence (AI)</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Generative AI</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Natural Language Processing (NLP)</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Large Language Models (LLM)</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Computer Vision</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Chatbot Development</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Chatbot Responses</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Chatbot Testing</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Modeling Languages</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Neural Networks</h4>
            </article>
          </div>
        </div>
        <div className="skill__backend">
          <h3>Programming Languages & Frameworks</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Python (Programming Language)</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>TypeScript</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Node.js</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>React.js</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>React Native</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>FastAPI</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>TensorFlow</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Keras</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Tailwind CSS</h4>
            </article>
          </div>
        </div>
        <div className="skill__ui-design">
          <h3>Business & Operations</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Business Model Development</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Business Networking</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Continuous Improvement Culture</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>IT Consulting</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Client Success</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Technology Solution Delivery</h4>
            </article>
          </div>
        </div>
        <div className="skill__ui-design">
          <h3>Web & Application Development</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>E-Commerce</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Digital Accessibility</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Language Development</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Multilingual Communication</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
