import React from "react";
import Typing from "../component/Typing";
import { Container } from "react-bootstrap";
import { Flip, Fade } from "react-reveal";
import HamburgerMenu from "../component/HamburgerMenu";

const Introduce = () => {
  const menu = ["HOME", "ABOUT ME", "SKILL", "PROJECTS", "ARCHIVING"];

  return (
    <div id="HOME" className="introduce-area">
      <Container>
        <Fade delay={2000} duration={1500}>
          <header>
            <section className="title">
              <div>Web Developer</div>
              <div>Portfolio</div>
            </section>
            <section>
              <ul>
                {menu.map((item) => (
                  <li style={{ marginRight: "30px" }}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </section>
          </header>
          <HamburgerMenu className="nav-hamburger" />
        </Fade>

        <section className="introduce-typing">
          <div className="first-text">
            {"<Introduce>"}
            <Typing text=" Hello! " />
            {"</Introduce>"}
          </div>
          <div className="second-text">
            {"<Introduce>"}
            <Typing text=" I am Kangin Lee, a Web Developer. " />
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
              <img width={120} src="images/scrolldown.gif" />
              <div className="introduce-more" style={{ fontSize: "0.13em" }}>
                more
              </div>
            </div>
          </Fade>
        </section>
      </Container>
    </div>
  );
};

export default Introduce;
