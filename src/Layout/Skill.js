import React from "react";
import { Container } from "react-bootstrap";
import MenuTitle from "../component/MenuTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillList from "../component/SkillList";

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

  // const skillArray = ({ width, src, title }) => {
  //   return (
  //     <div className="skill-logo">
  //       <img width={width} src={src} />
  //       <h5>{title}</h5>
  //     </div>
  //   );
  // };
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
              <Carousel responsive={responsive} className="skill-carousel">
                <SkillList
                  src="images/skills/html.png"
                  title="HTML5"
                  sub="웹 구조를 세밀하게 설계하고, 검색 엔진 최적화와 웹 접근성을 고려하여 사용자 중심의 웹 페이지를 구현하려 노력합니다."
                />
                <SkillList
                  src="images/skills/css.png"
                  title="CSS3"
                  sub="웹 페이지를 디자인하고, 반응형 디자인을 통해 모든 디바이스에서 일관된 시각적 경험을 제공한 경험이 있습니다."
                />
                <SkillList
                  src="images/skills/JavaScript.png"
                  title="JAVASCRIPT"
                  sub="ES6 문법을 배우고, 다양한 인터랙션과 기능을 추가하여 미래 사용자와의 소통에 집중하겠습니다."
                />
                <SkillList
                  src="images/skills/java.png"
                  title="JAVA"
                  sub=" 웹 서버 및 모바일 앱을 개발하여 안정성과 다양한 기능을 구현하는 경험을 보유하고 있습니다"
                />
                <SkillList
                  src="images/skills/python.png"
                  title="Python"
                  sub="머신러닝과 딥러닝을 탐구하기 위한 언어로 선택했습니다. 다양한 라이브러리와 프레임워크를 활용하여 데이터 분석 프로젝트를 진행하며, 파이썬의 간결성을 경험했습니다."
                />
                <SkillList
                  src="images/skills/c.png"
                  title="C"
                  sub="하드웨어와의 효율적인 통신과 메모리 관리를 염두에 두고 작업하며 리눅스 환경에서의 임베디드 시스템을 제어했습니다."
                />
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Framework & Library >"}</h1>
            <div>
              <Carousel responsive={responsive} className="skill-carousel">
                <SkillList
                  src="images/skills/react.png"
                  title="REACT"
                  sub="컴포넌트 기반 구조를 통해 모듈화된 UI 요소를 조합하고, 상태 관리를 통해 사용자와의 원활한 상호작용을 구현했습니다."
                />
                <SkillList
                  src="images/skills/redux.png"
                  title="REDUX"
                  sub="상태 관리를 체계적으로 처리하여 데이터의 흐름을 효율적으로 관리한 경험을 보유하고 있습니다."
                />
                <SkillList
                  src="images/skills/bootstrap.png"
                  title="BOOTSTRAP"
                  sub="일관된 디자인과 반응형 레이아웃을 제공하며, 간결한 코드 작성으로 빠르고 효율적인 UI 구축을 실현했습니다."
                />
                <SkillList
                  src="images/skills/jquery.png"
                  title="JQUERY"
                  sub="인턴 생활을 할 때 사용해 봤으며, 웹 요소를 동적으로 조작하고 사용자와의 인터랙션을 강화시켜 사용성을 향상시켰습니다. "
                />
                <SkillList
                  src="images/skills/tensorflow.png"
                  title="TENSORFLOW"
                  sub="텐서플로우를 활용하여 머신러닝 및 딥러닝 프로젝트를 진행한 경험이 있습니다."
                />
                <SkillList
                  src="images/skills/node.png"
                  title="EXPRESS.JS"
                  sub="캡스톤 디자인 프로젝트에서 프로젝트 서버를 구축하는 데 활용한 경험이 있습니다. "
                />
                <SkillList
                  src="images/skills/spring.png"
                  title="SPRING"
                  sub=" 인턴 생활 중 서버 구축에 활용한 경험이 있습니다. 서버 개발에서 스프링을 활용하여 데이터 처리와 비즈니스 로직을 구현했습니다."
                />
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Database >"}</h1>
            <div>
              <Carousel responsive={responsive} className="skill-carousel">
                <SkillList
                  src="images/skills/oracle.png"
                  title="ORACLE"
                  sub="강의 중에 접했으며 데이터의 저장 및 검색, 복잡한 쿼리 작성을 통해 데이터베이스 관리에 대한 이해를 했습니다."
                />
                <SkillList
                  src="images/skills/mysql.png"
                  title="MYSQL"
                  sub="처음으로 접한 데이터베이스로, 인턴 기간 동안 프로젝트에서 활용해 CRUD를 작업을 수행했습니다."
                />
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Mobile >"}</h1>
            <div>
              <Carousel responsive={responsive} className="skill-carousel">
                <SkillList
                  src="images/skills/android.png"
                  title="ANDROID STUDIO"
                  sub="머신러닝 관련 앱을 개발한 경험이 있습니다. 안드로이드 스튜디오의 개발 환경을 통해 사용자 친화적인 인터페이스와 머신러닝 모델의 통합을 구현했습니다."
                />
              </Carousel>
            </div>
          </div>
          <div>
            <h1 className="skill-name">{"< Version Control & Deployment >"}</h1>
            <div>
              <Carousel responsive={responsive} className="skill-carousel">
                <SkillList
                  src="images/skills/git.png"
                  title="GIT"
                  sub="깃을 통해 버전관리를 꾸준히 하고 있습니다."
                />
                <SkillList
                  src="images/skills/github.png"
                  title="GITHUB"
                  sub="꾸준한 업데이트로 프로젝트 및 공부한 내용 등의 발전 과정을 기록하고 있습니다."
                />
                <SkillList
                  src="images/skills/netlify.png"
                  title="NETLIFY"
                  sub="Netlify의 편리한 배포 기능을 이용하여 프론트엔드 웹 애플리케이션을 배포한 경험이 있습니다."
                />
              </Carousel>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Skill;
