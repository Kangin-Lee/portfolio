import React, { useEffect, useState } from "react";
import Typing from "../component/Typing";
import { Container } from "react-bootstrap";
import {Flip,Fade } from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Introduce = () => {
  const menu = ["HOME", "ABOUT ME", "SKILL", "PROJECTS", "ARCHIVING"];

  return (
    <div className="introduce-area">
      <Container>
        <header>
          <section className="title">
            <div>Web Developer</div>
            <div>Portfolio</div>
          </section>
          <section>
            <ul>
              {menu.map((item) => (
                <li style={{ marginRight: "30px"}}>{item}</li>
              ))}
            </ul>
            <FontAwesomeIcon icon={faBars} className="bar"/>
          </section>
        </header>

        <section className="introduce-typing">
          <div className="first-text">
            {"<Introduce>"}
            <Typing text=" Hello! " delay={1200}/>
            {"</Introduce>"}
          </div>
          <div className="second-text">
            {"<Introduce>"}
            <Typing text=" I am Kangin Lee, a Web Developer. " delay={1000} />
            {"</Introduce>"}
          </div>
        </section>

        <section className="introduce-body">
          <Flip top delay={2000} duration={1000}>
            <div>
              <div>KANGIN</div>
              <div>PORTFOLIO</div>
            </div>
          </Flip>
          <Fade delay={2800} duration={1200}>
          <div className="scrolldown">
              <img
                width={120}
                src="images/scrolldown.gif"
              />
              <div className="introduce-more" style={{fontSize:"0.13em"}}>more</div>
            </div>
            </Fade>
        </section>
      </Container>
    </div>
  );
};

export default Introduce;
