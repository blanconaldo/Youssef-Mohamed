import { useEffect, useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsFillRocketFill } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
const HOME_LINK = "#";
const ABOUT_LINK = "#about";
const SKILLS_LINK = "#skills";
const PROJECTS_LINK = "#projects";
const EDUCATION_LINK = "#education";
const CONTACT_LINK = "#contact";


const Nav = () => {
  const [active, setActive] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      // console.log("scrollPosition", scrollPosition);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // console.log("sectionTop", sectionTop, index);
        // console.log("sectionHeight", sectionHeight, index);

        if (
          scrollPosition >= sectionTop - sectionHeight * 0.5 &&
          scrollPosition < sectionTop + sectionHeight * 0.5
        ) {
          setActive(`#${section.id}`);
        }
      });
      // Check if the scroll position is at the top of the page
      if (scrollPosition === 0) {
        setActive("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a
        href={HOME_LINK}
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href={ABOUT_LINK}
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href={SKILLS_LINK}
        className={active === "#skills" ? "active" : ""}
        onClick={() => setActive("#skills")}
      >
        <HiBadgeCheck />
      </a>
      <a
        href={PROJECTS_LINK}
        className={active === "#projects" ? "active" : ""}
        onClick={() => setActive("#projects")}
      >
        <BsFillRocketFill />
      </a>
      <a
        href={EDUCATION_LINK}
        className={active === "#education" ? "active" : ""}
        onClick={() => setActive("#education")}
      >
        <FaGraduationCap />
      </a>
      <a
        href={CONTACT_LINK}
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
