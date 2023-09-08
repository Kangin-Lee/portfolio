import React from 'react'
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faUser,
  faCakeCandles,
  faPhone,
  faEnvelope,
  faPencil,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import AboutMenu from "../component/AboutMenu";
import MenuTitle from "../component/MenuTitle";
import TimeLine from "../component/TimeLine";

const AboutMe = () => {
  return (
    <div id="ABOUT ME" className="aboutme-area">
      <Container>
        <header style={{ marginBottom: "50px" }}>
          <MenuTitle title={"ABOUT ME"} />
        </header>
        <TimeLine />
      </Container>
    </div>
  );
};

export default AboutMe
