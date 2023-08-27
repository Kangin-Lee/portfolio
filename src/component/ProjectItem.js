import React from "react";

const ProjectItem = () => {
  const smartMirror = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Node.js",
    "VSCode",
  ];
  return (
    <div className="project-item">
      <section className="projectItem-left">
        <h1 className="project-seq"># PROJECT 1</h1>
        <img src="images/project/stylist.gif" />
        <p>
          캡스톤 디자인 시간에 제작한 웹 사이트입니다. 패션에 대한 스마트 미러를
          만들면서 그 제품과 연동이 되는 웹페이지를 만들 목적으로 구축했습니다.
          API로 날씨를 받아와 보여주고 오늘 날씨에 따른 옷차림과 컬러매치,
          본인의 옷장에 있는 옷으로 코디하는 기능을 만들었습니다. 연습으로
          간단한 프로젝트에서만 사용하던 React를 처음으로 실제 프로젝트에
          사용해서 잘 만들고 싶은 욕심이 있었습니다. 여러가지 많은 툴을 사용해
          봄으로써 실력 향상에 좋은 발판이 되었다고 생각합니다.
        </p>
      </section>
      <div className="project-line"></div>
      <section className="projectItem-right">
        <div>
          <h2>Project Name</h2>
          <h4>▶ Smart Stylist</h4>
        </div>
        <div>
          <h2>Periods of Development</h2>
          <h4>▶ 2023.03 ~ 2023.06</h4>
        </div>
        <div>
          <h2>Skill / IDE</h2>
          <h4>
            <ul className="project-skillList">
              {smartMirror.map((item) => (
                <li>#{item}</li>
              ))}
            </ul>
          </h4>
        </div>
        <div>
          <h2>CODE(Github URL)</h2>
          <div>
            <h4>▶ 소스코드</h4>
            <h6>
              <a href="https://github.com/Kangin-Lee/smartMirror-Stylist">
                https://github.com/Kangin-Lee/smartMirror-Stylist
              </a>
            </h6>
          </div>
          <div>
            <h4>▶ 웹 페이지 주소</h4>
            <h6>
              <a href="https://smartmirror-stylist.netlify.app/">
                https://smartmirror-stylist.netlify.app/
              </a>
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectItem;
