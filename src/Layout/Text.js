import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-reveal/";

const Text = () => {
  return (
    <div className="text-area">
      <Container className="text-box">
        <Fade duration={3000}>
          <div className="text-header">"</div>
          <div className="text-section">
            성실하고 꾸준한 노력으로 개발 실력을 향상시키며 침착하고 끈기 있는
            태도로 사용자 중심의 웹, 앱을 개발하고 새로운 도전에도 두려움 없이
            임하겠습니다.
          </div>

          <div className="text-scroll-down">Scroll Down</div>
        </Fade>
      </Container>
    </div>
  );
};

export default Text;
