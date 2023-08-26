import React from "react";

const SkillList = ({ src, title, sub }) => {
  const width = title === "C" ? 130 : title === "Tensorflow" ? 139 : 150;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="skill-logo flip-card-front">
          <img width={width} src={src} alt={title} />
          <h5 style={{ marginTop: "10px" }}>{title}</h5>
        </div>
        <div className="flip-card-back">
          <h5>{`< ${title} >`}</h5>
          <p className="flip-sub">{sub}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
