import React from "react";
import { Container } from "react-bootstrap";
import MenuTitle from "../component/MenuTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="SKILL" className="skill-area">
      <Container>
        <header>
          <MenuTitle title={"SKILL"} />
        </header>

        <section>
          <div className="skill-language">
            <h1 className="skill-name">{"< Language >"}</h1>
            <div>
              <Carousel responsive={responsive}>
                <div className="skill-logo">
                  <img width={150} src="images/skills/html.png" />
                  <h5>HTML5</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/css.png" />
                  <h5>CSS3</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/JavaScript.png" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/java.png" />
                  <h5>JAVA</h5>
                </div>
                <div className="skill-logo">
                  <img width={130} src="images/skills/c.png" />
                  <h5>C</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/python.png" />
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Framework & Library >"}</h1>
            <div>
              <Carousel responsive={responsive}>
                <div className="skill-logo">
                  <img width={150} src="images/skills/react.png" />
                  <h5>REACT</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/redux.png" />
                  <h5>REDUX</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/bootstrap.png" />
                  <h5>BOOTSTRAP</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/jquery.png" />
                  <h5>JQUERY</h5>
                </div>
                <div className="skill-logo">
                  <img width={139} src="images/skills/tensorflow.png" />
                  <h5>TENSORFLOW</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/node.png" />
                  <h5>EXPRESS.JS</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/spring.png" />
                  <h5>SPRING</h5>
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Database >"}</h1>
            <div>
              <Carousel responsive={responsive}>
                <div className="skill-logo">
                  <img width={150} src="images/skills/oracle.png" />
                  <h5>ORACLE</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/mysql.png" />
                  <h5>MYSQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Mobile >"}</h1>
            <div>
              <Carousel responsive={responsive}>
                <div className="skill-logo">
                  <img width={150} src="images/skills/android.png" />
                  <h5>ANDROID STUDIO</h5>
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Version Control & Deployment >"}</h1>
            <div>
              <Carousel responsive={responsive}>
                <div className="skill-logo">
                  <img width={150} src="images/skills/git.png" />
                  <h5>GIT</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/github.png" />
                  <h5>GITHUB</h5>
                </div>
                <div className="skill-logo">
                  <img width={150} src="images/skills/netlify.png" />
                  <h5>NETLIFY</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Skill;
