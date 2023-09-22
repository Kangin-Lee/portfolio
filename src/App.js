import "./App.css";
import AboutMe from "./Layout/AboutMe";
import Archiving from "./Layout/Archiving";
import Footer from "./Layout/Footer";
import Introduce from "./Layout/Introduce";
import Project from "./Layout/Project";
import Skill from "./Layout/Skill";
import Text from "./Layout/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <span className="page-up">
        <a href="#HOME">
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            className="page-up-button"
          />
        </a>
      </span>
      <Introduce />
      <Text />
      <AboutMe />
      <Skill />
      <Project />
      <Archiving />
      <Footer />
    </div>
  );
}

export default App;
