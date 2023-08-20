import React from 'react'
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faUser,
  faCakeCandles,
  faPhone,
  faEnvelope,
  faPencil,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import AboutMenu from "../component/AboutMenu";
import MenuTitle from "../component/MenuTitle";

const AboutMe = () => {
  return (
    <div className="aboutme-area">
      <Container>
        <header>
          <MenuTitle title={"ABOUT ME"} />
        </header>
        <AboutMenu icon={faUser} title={"이름"} sub={"이강인"} />
        <AboutMenu icon={faCakeCandles} title={"생년월일"} sub={"1999.02.05"} />
        <AboutMenu icon={faPhone} title={"연락처"} sub={"010-6472-8358"} />
        <AboutMenu
          icon={faEnvelope}
          title={"이메일"}
          sub={"rkddls0205@naver.com"}
        />
        <AboutMenu
          icon={faPencil}
          title={"학력"}
          sub={"대전대학교"}
          sub2={"컴퓨터·정보통신공학과"}
        />
        <AboutMenu icon={faFilePen} title={"활동"} sub={"GN SOFT"} />

        <section></section>
      </Container>
    </div>
  );
};

export default AboutMe
