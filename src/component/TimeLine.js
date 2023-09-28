import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSchool,
  faBuildingColumns,
  faLaptopCode,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const TimeLine = () => {
  return (
    <div className="about-timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img width={70} src="images/hello.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            <FontAwesomeIcon icon={faUser} />
            소개
          </h3>

          <p>안녕하세요! 이강인입니다. 간단한 제 정보입니다.</p>
          <ul className="about-list">
            <li>이름: 이강인(Lee Kangin)</li>
            <li>생년월일: 1999년 02월 05일</li>
            <li>전화번호: 010-6472-8358</li>
            <li>이메일: rkddls0205@naver.com</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          date="2006 ~ 2017"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          icon={<img width={70} src="images/pen.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            <FontAwesomeIcon icon={faSchool} />
            학창시절
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            초등학생부터 고등학생까지
          </h4>
          <p>
            저는 어린 시절부터 고등학생까지 조용하게 성장하면서도, 저에게 주어진
            모든 일을 묵묵히 수행하는 데 노력해왔습니다. 이러한 성실하고 근면한
            태도는 저에게 학교에서 매번 개근상을 수상할 기회를 제공했습니다.
            이러한 개근상은 단순히 결석이 없다는 의미를 넘어, 제 업무에 대한
            진정한 헌신과 책임감을 상징한다고 생각합니다.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          date="2018.03 ~"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          icon={<img width={70} src="images/daejeonuniv.svg" />}
        >
          <h3 className="vertical-timeline-element-title">
            <FontAwesomeIcon icon={faBuildingColumns} />
            대전대학교
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            정보통신공학과 입학
          </h4>
          <p>
            대학교 입학 후, 저의 학업은 더욱 꾸준하게 성장하고 발전했습니다.
            대전대학교에서 정보통신공학과를 선택하고, 높은 학업 성취도를 통해
            학교 생활을 더욱 풍요롭게 만들었습니다.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          date="2023.01 ~ 2023.02"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          icon={<img width={70} src="images/bag.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            <FontAwesomeIcon icon={faBuilding} />
            지엔소프트
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            기업부설연구소 인턴
          </h4>
          <p>
            지엔소프트의 기업부설연구소에서 1월 초부터 2월 말까지 약 2달간
            인턴쉽을 진행하였습니다. 인턴 기간동안 Spring을 통한 게시판을 만드는
            작업을 하였고 프로젝트를 완료하기 위해 개인적인 공부와 반복학습으로
            제 능력을 적극적으로 발휘하였습니다. 이러한 개인 프로젝트를 통해
            개발 역량뿐만 아니라 자기 주도적인 업무 처리 능력도 향상시켰습니다.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          date="2023.08 ~ 2023.10"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: "#fff",
          }}
          icon={<img width={70} src="images/coding.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            <FontAwesomeIcon icon={faLaptopCode} />
            온디바이스AI 개발자 과정
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            HRD사업단 및 고용노동부 주관
          </h4>
          <p>
            학교 수업 대신, HRD사업단 주관인 온디바이스AI 개발자 과정을
            수강하였습니다. 이 기간 동안, 머신 러닝과 딥러닝 모델을 구현하고,
            텐서플로우를 통해 모델 학습 및 최적화에 집중하였습니다. 또한, 자바를
            이용해 안드로이드 모바일 애플리케이션을 개발하였습니다. 이러한
            경험을 통해 일반 학교 수업을 듣는 학생들보다 경쟁력을 키웠고,
            실무에서의 문제 해결 능력과 창의적인 솔루션 개발 능력을
            향상시켰습니다.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          date="~ 2024.02"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: "#fff",
          }}
          icon={<img width={70} src="images/top.png" />}
        >
          <h3 className="vertical-timeline-element-title">
            <FontAwesomeIcon icon={faGraduationCap} />
            대전대학교 졸업
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            정보통신공학과 수석졸업 예정
          </h4>
          <p>
            대전대학교 정보통신공학과 졸업 예정이며, 평균 학점 4.44로 수석을
            유지하고 있습니다. 이러한 학업 성취는 제 성실함과 꾸준한 노력, 목표
            달성에 대한 열정을 대변합니다. 또한, 1등을 하며 경쟁에서 우위에 서는
            능력을 보여주었으며, 항상 최선을 다하고 어떤 도전이든 성공적으로
            해내는 데 자신감을 가지고 있습니다. 이러한 경험과 역량을 토대로
            협력과 열정을 가지고 업무에 임하겠으며, 회사 내에서 가치를 더할 것을
            약속드립니다.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{
            background: "rgb(16, 204, 82)",
            color: "#fff",
          }}
          icon={<img width={70} src="images/check.png" />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
