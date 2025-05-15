import React from "react";
import "./LearningProjects.css";
import todolist from "../../assets/Saspa-Landing-Page.png"
import pubg from "../../assets/Canadian-Port-Entry-Prediction-Model.png";
import biriyani from "../../assets/AI-Chrome-Extension-Chatbot.png";
import cartoon from "../../assets/Fashion-MNIST-Classifier.png";


const LearningProjects = () => {
  return (
    <section id="projects">


      <div className="container portfolio__container">
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={cartoon} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Fortune Teller - A NFC based fun to play game</h3>
            <p className="text-sm leading-5">
              This project is a Desktop application that features a fun-filled gaming experience through two unique formats: a web-based game and an NFC card-based game called Fortune Teller. Players interact with the fortune-telling game to receive humorous predictions, offering an engaging and lighthearted way to have fun and explore playful possibilities.
            </p>
          </div>
      
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={pubg} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">A Game Publication Company Website - XR Publisher</h3>
            <p className="text-sm leading-5">
              XR Publisher is a game publisher company where they help game developer to publish their own game in XR game platform .
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://xrp.xri.com.bd/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
            <a>Source code is private for commercial issue</a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={todolist} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Stack Todo List</h3>
            <p className="text-sm leading-5">
              A simple crud operation in frontend site from stack learner
              youtube channel for practicing React.js.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://chic-twilight-9e9439.netlify.app/"
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
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={biriyani} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">
              Dhakai Biriyani - a Online Food Cart
            </h3>
            <p className="text-sm leading-5">
              This is a online food card ecommerce website where you can order a food specially biriyani items.This website also have a admin dashboard where admin can manage order , sell , and product
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://dhakaybiriyani.com/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        {/*<article className="portfolio_item flex flex-col justify-between">*/}
        {/*  <div className="top">*/}
        {/*    <div*/}
        {/*      className="portfolio_item-img"*/}
        {/*      style={{ backgroundColor: "white" }}*/}
        {/*    >*/}
        {/*      <img src={wasdpa} alt="" />*/}
        {/*    </div>*/}
        {/*    <h3 className="leading-5 !mt-3 !mb-3">Next.js Practice</h3>*/}
        {/*    <p className="text-sm leading-5">*/}
        {/*      WASDPA is a Bangladeshi NGO. They work with the poor region of Bangladesh to develop infrastructure and health consciousness. This website represents their portfolio and showcase their novel work.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*  <div className="flex justify-start gap-2 mt-4 ">*/}
        {/*    <a*/}
        {/*      href="https://wasdpa.com/"*/}
        {/*      className="btn btn-primary !py-1 !px-2 text-sm leading-7"*/}
        {/*      target="_blank"*/}
        {/*    >*/}
        {/*      Live Demo*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</article>*/}
        {/*/!* single Project  *!/*/}
        {/*/!* single Project  *!/*/}
        {/*<article className="portfolio_item flex flex-col justify-between">*/}
        {/*  <div className="top">*/}
        {/*    <div*/}
        {/*      className="portfolio_item-img"*/}
        {/*      style={{ backgroundColor: "white" }}*/}
        {/*    >*/}
        {/*      <img src={money} alt="restautent" />*/}
        {/*    </div>*/}
        {/*    <h3 className="leading-5 !mt-3 !mb-3">Ecommerce Website using Laravel</h3>*/}
        {/*    <p className="text-sm leading-5">*/}
        {/*      Ajwanshop is an e-commerce platform that sells various types of projects, such as t-shirts,perfume,and many types of electronic gadgets. I built it for a Bangladeshi client using PHP Laravel.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*  <div className="flex justify-start gap-2 mt-4 ">*/}
        {/*    <a*/}
        {/*      href="https://ajwanshop.com/"*/}
        {/*      className="btn btn-primary !py-1 !px-2 text-sm leading-7"*/}
        {/*      target="_blank"*/}
        {/*    >*/}
        {/*      Live Demo*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</article>*/}
        {/* single Project  */}
      </div>
    </section>
  );
};

export default LearningProjects;
