// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Projects.css";
import Saspa from "../../assets/Saspa-Landing-Page.png";
import Fashion from "../../assets/Fashion-MNIST-Classifier.png";
import Chatbot from "../../assets/AI-Chrome-Extension-Chatbot.png";
import PredictionModel from "../../assets/Canadian-Port-Entry-Prediction-Model.png";


const Projects = () => {

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={Fashion} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Fashion MNIST Classifier</h3>
            <p className="text-sm leading-5">
              A convolutional neural network classifier model trained on Zalando&apos;s Fashion MNIST dataset with accuracy reaching up to 93%. Dockerized and deployed on Render as a Streamlit app for User Interface.
              <a href="https://github.com/blanconaldo/Fashion-MNIST-Classifier" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
              )
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://fashion-mnist-classifier.onrender.com/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}

        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={PredictionModel} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Canadian Port Entry Prediction Model</h3>
            <p className="text-sm leading-5">
              A Streamlit application for predicting the entry into Canadian ports from all different regions and modes of transport using regression algorithms
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/blanconaldo/Canadian-Port-Entry-Prediction-Model"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            {" "}
            <div className="portfolio_item-img">
              <img src={Saspa} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Saspa Landing Page</h3>
            <p className="text-sm leading-5">
              Landing page for Saspa, a Kuwaiti furniture company.
              <a href="https://github.com/blanconaldo/Saspa-Landing-Page" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
                href="https://saspa-webpage.vercel.app/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}

        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={Chatbot} alt=" " />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">
              AI Chrome Extension Chatbot
            </h3>
            <p className="text-sm leading-5">
              This Chrome extension allows users to interact with webpages conversationally, extracting specific information like university admission requirements or faculty lists with ease. Built as a personal project to streamline research, the extension features a toggleable sidebar where users can ask questions, and it uses the GROQ API
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
                href="https://github.com/blanconaldo/AI-Chrome-Extension-Chatbot"
                className="btn btn-primary !py-1 !px-2 text-sm leading-7"
                target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
