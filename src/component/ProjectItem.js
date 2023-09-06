import React from "react";

const ProjectItem = ({ projectInfo }) => {
  return (
    <div className="project-item">
      <section className="projectItem-left">
        <h1 className="project-seq">{projectInfo.projectNum}</h1>
        <img width={600} src={projectInfo.projectImg} className="project-img" />
        <p>{projectInfo.projectExplain}</p>
      </section>
      <div className="project-line"></div>
      <section className="projectItem-right">
        <div className="project-list">
          <h2>Project Name</h2>
          <h4>▶ {projectInfo.projectName}</h4>
        </div>
        <div className="project-list">
          <h2>Periods of Development</h2>
          <h4>▶ {projectInfo.developmentPeriods}</h4>
        </div>
        <div className="project-list">
          <h2>Skill / IDE</h2>
          <h4>
            <ul className="project-skillList">
              {projectInfo.skills.map((item) => (
                <li>#{item}</li>
              ))}
            </ul>
          </h4>
        </div>
        <div className="project-list">
          <h2>CODE(Github URL)</h2>
          <div>
            <h4>▶ 소스코드</h4>
            <h6>
              <a href={projectInfo.githubUrl} target="_blank">
                {projectInfo.githubUrl}
              </a>
            </h6>
          </div>
          <div>
            <h4>▶ 웹 페이지 주소</h4>
            <h6>
              <a href={projectInfo.webPageUrl} target="_blank">
                {projectInfo.webPageUrl}
              </a>
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectItem;
