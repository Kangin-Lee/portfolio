import React from "react";
import { Container } from "react-bootstrap";
import { SiInstagram, SiTistory, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-area">
          <ul className="footer-brands">
            <a href="https://www.instagram.com/kanginlee9925/" target="_blank">
              <li>
                <SiInstagram />
              </li>
            </a>
            <a href="https://conquer-it.tistory.com/" target="_blank">
              <li>
                <SiTistory />
              </li>
            </a>

            <a href="https://github.com/Kangin-Lee" target="_blank">
              <li>
                <SiGithub />
              </li>
            </a>
          </ul>

          <section className="footer-copyright">
            Copyright 2023. Lee Kangin all right reserved.
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
