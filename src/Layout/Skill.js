import React from "react";
import { Container } from "react-bootstrap";
import MenuTitle from "../component/MenuTitle";

const Skill = () => {

  return (
    <div id="SKILL" className="skill-area">
      <Container>
        <header>
          <MenuTitle title={"SKILL"} />
        </header>

        <section>
          <div className="skill-language">
            <div>Language</div>
            <ul></ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </Container>
    </div>
  );
};

export default Skill;
