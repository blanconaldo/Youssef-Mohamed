// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Education.css";
import Oxford from "../../assets/oxford-logo.jpg"
import Deg from "../../assets/th-deggendorf.png"

const Education = () => {
  return (
    <section id="education" className="education">

      <h5>My Academic Journey</h5>
      <h2>Education</h2>

        <div className="education-item">
            <img src={Oxford} alt="College Logo"/>
            <div className="education-details">
                <h3>International A-Levels</h3>
                <p className="institution">Oxford Academy of Kuwait</p>
                <p className="duration">2022 - 2023</p>
            </div>

            <img src={Deg} alt="College Logo"/>
            <div className="education-details">
                <h3>B.Sc. in Artificial Intelligence</h3>
                <p className="institution">Technische Hochschule Deggendorf</p>
                <p className="duration">2023 - Current</p>
            </div>
        </div>
    </section>
  );
};

export default Education;
