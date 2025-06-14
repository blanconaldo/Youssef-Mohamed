// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className="footer_logo">
        Go To
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/youssef-mohamed-37495834a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/blanconaldo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.instagram.com/youcefalgohary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        
      </div>
      
      <div className="footer_copyright">
        <small>&copy; Youssef Mohamed {currentYear}</small>
      </div>
    </footer>
  );
};

export default Footer;
