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
        <header>
          <MenuTitle title={"ABOUT ME"} />
        </header>
        <div className="about-2pack">
          <div className="name-area">
            <AboutMenu
              icon={faUser}
              title={"NAME"}
              sub={"이강인 (Lee Kangin)"}
            />
          </div>
          <div className="birth-area">
            <AboutMenu
              icon={faCakeCandles}
              title={"DATE OF BIRTH"}
              sub={"1999.02.05"}
            />
          </div>
        </div>

        <div className="about-2pack">
          <div className="tel-area">
            <AboutMenu icon={faPhone} title={"TEL"} sub={"010-6472-8358"} />
          </div>

          <div className="email-area">
            <AboutMenu
              icon={faEnvelope}
              title={"E-MAIL"}
              sub={"rkddls0205@naver.com"}
            />
          </div>
        </div>

        <div className="about-2pack">
          <div className="univ-area">
            <AboutMenu
              icon={faPencil}
              title={"UNIV."}
              sub={"대전대학교"}
              sub2={"(컴퓨터·정보통신공학과, 평균 학점: 4.44)"}
            />
          </div>

          <div className="about active-area">
            <div className="about-icon">
              <FontAwesomeIcon icon={faFilePen} />
            </div>
            <div>
              <div className="about-title">ACTIVITIES</div>
              <div style={{ fontSize: "1.1em" }} className="about-sub">
                <div style={{ marginBottom: "10px" }} className="about-active">
                  <div>● (주) 지엔소프트 인턴</div>
                </div>
                <div className="about-active">
                  <div>● 온디바이스 AI 개발자 과정 수료</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TimeLine />
      </Container>
    </div>
  );
};

export default AboutMe
