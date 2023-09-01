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
      projectNum: "# PROJECT 1",
      projectImg: ["images/project/stylist.gif"],
      projectExplain:
        "캡스톤 디자인 시간에 제작한 웹 사이트입니다. 패션에 대한 스마트 미러를\n만들면서 그 제품과 연동이 되는 웹페이지를 만들 목적으로 구축했습니다.\nAPI로 날씨를 받아와 보여주고 오늘 날씨에 따른 옷차림과 컬러매치,\n본인의 옷장에 있는 옷으로 코디하는 기능을 만들었습니다. 연습으로\n간단한 프로젝트에서만 사용하던 React를 처음으로 실제 프로젝트에\n사용해서 잘 만들고 싶은 욕심이 있었습니다. 여러가지 많은 툴을 사용해\n봄으로써 실력 향상에 좋은 발판이 되었다고 생각합니다.",
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
      projectNum: "# PROJECT 2",
      projectImg: ["images/project/hnm.gif"],
      projectExplain:
        "캡스톤 디자인 시간에 제작한 웹 사이트입니다. 패션에 대한 스마트 미러를\n만들면서 그 제품과 연동이 되는 웹페이지를 만들 목적으로 구축했습니다.\nAPI로 날씨를 받아와 보여주고 오늘 날씨에 따른 옷차림과 컬러매치,\n본인의 옷장에 있는 옷으로 코디하는 기능을 만들었습니다. 연습으로\n간단한 프로젝트에서만 사용하던 React를 처음으로 실제 프로젝트에\n사용해서 잘 만들고 싶은 욕심이 있었습니다. 여러가지 많은 툴을 사용해\n봄으로써 실력 향상에 좋은 발판이 되었다고 생각합니다.",
      projectName: "H&M Clone",
      developmentPeriods: "2023.02 ~ 2023.03",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "VSCode"],
      githubUrl: "https://github.com/Kangin-Lee/HnM_clone",
      webPageUrl: "https://kangin-hnm.netlify.app/",
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
            {projectInfoData.map((projectInfo) => (
              <ProjectItem projectInfo={projectInfo} />
            ))}
            {/* Sprint Board part========================================= */}
            <div className="project-item">
              <section className="projectItem-left">
                <h1 className="project-seq"># PROJECT 3</h1>
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
                  캡스톤 디자인 시간에 제작한 웹 사이트입니다. 패션에 대한
                  스마트 미러를\n만들면서 그 제품과 연동이 되는 웹페이지를 만들
                  목적으로 구축했습니다.\nAPI로 날씨를 받아와 보여주고 오늘
                  날씨에 따른 옷차림과 컬러매치,\n본인의 옷장에 있는 옷으로
                  코디하는 기능을 만들었습니다. 연습으로\n간단한 프로젝트에서만
                  사용하던 React를 처음으로 실제 프로젝트에\n사용해서 잘 만들고
                  싶은 욕심이 있었습니다. 여러가지 많은 툴을 사용해\n봄으로써
                  실력 향상에 좋은 발판이 되었다고 생각합니다.
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
          </Carousel>
        </section>
      </Container>
    </div>
  );
};

export default Project;
