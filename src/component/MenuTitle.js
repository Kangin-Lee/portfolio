import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Bounce, Fade } from "react-reveal/";

const MenuTitle = ({ title }) => {
  return (
    <div className="menutitle">
      <div>
        <Bounce top delay={1000}>
          <FontAwesomeIcon icon={faCheck} />
        </Bounce>
      </div>
      <div>
        <Fade left delay={600}>
          {title}
        </Fade>
      </div>
    </div>
  );
};

export default MenuTitle;
