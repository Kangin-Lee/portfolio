import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMenu = ({ icon, title, sub, sub2 }) => {
  return (
    <div className="about">
      <div className="about-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <div className="about-title">{title}</div>
        <div className="about-sub">{sub}</div>
        <div
          className="about-sub2"
          style={{
            fontFamily: "'Do Hyeon', sans-serif",
            fontSize: "1.2em",
            color: "#343541",
          }}
        >
          {sub2}
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
