// eslint-disable-next-line no-unused-vars
import React from "react";
import CV from "../../assets/Youssef_Mohamed_AI_CV_English.pdf";

const CTA = () => {
  const CONTACT_LINK = "#contact";
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href={CONTACT_LINK} className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default CTA;
