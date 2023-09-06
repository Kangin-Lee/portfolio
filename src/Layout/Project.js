import React from "react";
import { Container } from "react-bootstrap";
import MenuTitle from "../component/MenuTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectItem from "../component/ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Project = () => {
  const springBoardUrl = [
    "login",
    "findId",
    "findPwd",
    "signUp",
    "board",
    "write",
    "read",
  ];
  const springBoardSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
    "JSP",
    "Spring",
    "MySQL",
    "Bootstrap",
    "Eclipse",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projectInfoData = [
    // 데이터 배열
    {
      projectNum: "# PROJECT 2",
      projectImg: ["images/project/hnm.gif"],
      projectExplain:
        "React를 연습하며 H&M 홈페이지 클론을 만들어 보았습니다. 이 프로젝트에서는 JSON-Server를 활용하여 데이터 관리 및 RESTful API 구현을 연습했습니다. 기능은 다소 제한적이었지만 React를 활용한 데이터 관리와 라우팅에 대한 학습 경험이었습니다. 이러한 경험을 통해 웹 개발에 대한 흥미와 실력 향상을 도모하고 있으며, 앞으로 더 다양하고 복잡한 프로젝트에 도전하며 성장하고자 합니다.",
      projectName: "H&M Clone Site",
      developmentPeriods: "2023.02 ~ 2023.03",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "VSCode",
        "반응형",
      ],
      githubUrl: "https://github.com/Kangin-Lee/HnM_clone",
      webPageUrl: "https://kangin-hnm.netlify.app/",
    },
    {
      projectNum: "# PROJECT 3",
      projectImg: ["images/project/stylist.gif"],
      projectExplain:
        "캡스톤 디자인 시간에 제작한 웹 사이트입니다. 패션에 대한 스마트 미러를 만들면서 그 제품과 연동이 되는 웹페이지를 만들 목적으로 구축했습니다. API로 날씨를 받아와 보여주고 오늘 날씨에 따른 옷차림과 컬러매치, 본인의 옷장에 있는 옷으로 코디하는 기능을 만들었습니다. 연습으로 간단한 프로젝트에서만 사용하던 React를 처음으로 실제 프로젝트에 사용해서 잘 만들고 싶은 욕심이 있었습니다. 여러가지 많은 툴을 사용해 봄으로써 실력 향상에 좋은 발판이 되었다고 생각합니다.",
      projectName: "Smart Stylist",
      developmentPeriods: "2023.03 ~ 2023.06",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Node.js",
        "VSCode",
      ],
      githubUrl: "https://github.com/Kangin-Lee/smartMirror-Stylist",
      webPageUrl: "https://smartmirror-stylist.netlify.app/",
    },
    {
      projectNum: "# PROJECT 4",
      projectImg: ["images/project/portfolio.gif"],
      projectExplain:
        "종이로 제출하는 포트폴리오처럼 남들과 똑같은 포트폴리오를 따르기보다, 나만의 독특한 포트폴리오로 제 자신을 표현해보고자 만들어봤습니다. 다른 파트로 이동할 때마다 다양한 색감을 사용하는 디자인으로 저의 다양성과 프로젝트에 대한 열정을 나타내보았습니다. 하나의 분야에만 제한되지 않고 여러 분야를 다양하게 도전하면서 더 큰 목표를 향해 나아가겠다는 다짐입니다.",
      projectName: "KANGIN PORTFOLIO",
      developmentPeriods: "2023.08 ~ 2023.10",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "반응형",
        "VSCode",
      ],
      githubUrl: "https://github.com/Kangin-Lee/portfolio",
      webPageUrl: "https://kangin-portfolio.netlify.app/",
    },
  ];
  return (
    <div id="PROJECTS" className="project-area">
      <Container>
        <header>
          <MenuTitle title={"PROJECT"} />
        </header>

        <section>
          <Carousel responsive={responsive} className="project-carousel">
            {/* Sprint Board part========================================= */}
            <div className="project-item">
              <section className="projectItem-left">
                <h1 className="project-seq"># PROJECT 1</h1>
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  style={{ width: "600px" }}
                >
                  {springBoardUrl.map((url) => (
                    <SwiperSlide>
                      <img
                        width={600}
                        src={`images/project/gnsoft/${url}.jpg`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p>
                  인턴 기간 중, 전자정부프레임워크를 활용한 게시판을
                  개발했습니다. 로그인, 아이디/비밀번호 찾기, 회원가입, 게시판
                  기능을 구현했고, JQuery와 Spring을 처음 사용해 보았습니다.
                  초기에는 어려움을 겪었지만 이 경험을 통해 실력이
                  향상되었습니다. 웹 개발, 데이터베이스 상호작용, 보안, 사용자
                  경험 등 다양한 측면에서 배우고 성장한 경험이었습니다. 이를
                  통해 학습과 성장에 대한 열정을 더욱 확고히 했습니다. 앞으로도
                  끊임없는 도전을 통해 기술 스택을 확장하고 성공을
                  이끌어내겠습니다.
                </p>
              </section>
              <div className="project-line"></div>
              <section className="projectItem-right">
                <div className="project-list">
                  <h2>Project Name</h2>
                  <h4>▶ Spring Board</h4>
                </div>
                <div className="project-list">
                  <h2>Periods of Development</h2>
                  <h4>▶ 2023.01.02 ~ 2023.02.24</h4>
                </div>
                <div className="project-list">
                  <h2>Skill / IDE</h2>
                  <h4>
                    <ul className="project-skillList">
                      {springBoardSkills.map((item) => (
                        <li>#{item}</li>
                      ))}
                    </ul>
                  </h4>
                </div>
              </section>
            </div>
            {projectInfoData.map((projectInfo) => (
              <ProjectItem projectInfo={projectInfo} />
            ))}
          </Carousel>
        </section>
      </Container>
    </div>
  );
};

export default Project;
