import React from "react";
import { Container } from "react-bootstrap";
import MenuTitle from "../component/MenuTitle";
import Fade from "react-reveal/Fade";

const Archiving = () => {
  return (
    <div className="archiving-area">
      <Container>
        <header>
          <MenuTitle title={"ARCHIVING"} />
        </header>

        <section className="archiving-section">
          <Fade left delay={1100}>
            <div className="archiving-github">
              <img src="images/github.png" className="archiving-logo" />
              <div className="archiving-link">github.com/Kangin-Lee</div>
              <div className="archiving-text">
                공부 및 프로젝트 소스코드를 올리는 공간입니다.
              </div>
              <div className="preview">
                <div>Preview...</div>
                <img width={450} src="images/kangin_github.PNG" />
              </div>
            </div>
          </Fade>

          <Fade right delay={1100}>
            <div className="archiving-tistory">
              <img src="images/tistory.png" className="archiving-logo" />
              <div className="archiving-link">conquer-it.tistory.com</div>
              <div className="archiving-text">
                개인적으로 공부한 내용을 정리해 놓은 공간입니다.
              </div>
              <div className="preview">
                <div>Preview...</div>
                <img src="images/kangin_tistory.PNG" />
              </div>
            </div>
          </Fade>
        </section>
      </Container>
    </div>
  );
};

export default Archiving;
