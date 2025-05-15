// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Me.jpg";
import HeaderSocials from "./HeaderSocials";
import {AiOutlineArrowDown} from 'react-icons/ai'
const CONTACT_LINK = "#contact";

const Header = () => {
  return (
    <header className="container">
      {/* div.container */}
      <div className="header__container">
        <h5>Hello I&apos;m</h5>
        <h1 style={{ fontWeight: "600" }}>Youssef Mohamed</h1>
        <h5 className="text-light">AI Student</h5>
        <CTA />
        <HeaderSocials />

        <a href={CONTACT_LINK} className="scroll__down">
          Scroll Down <AiOutlineArrowDown />
        </a>
      </div>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </header>
  );
};

export default Header;
