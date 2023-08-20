import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMenu = ({ icon, title, sub, sub2, sub3, sub4 }) => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <div>{title}</div>
        <div>
          <div>{sub}</div>
          <div>{sub2}</div>
          <div>{sub3}</div>
          <div>{sub4}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
