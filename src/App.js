import "./App.css";
import AboutMe from "./Layout/AboutMe";
import Archiving from "./Layout/Archiving";
import Footer from "./Layout/Footer";
import Introduce from "./Layout/Introduce";
import Project from "./Layout/Project";
import Skill from "./Layout/Skill";
import Text from "./Layout/Text";

function App() {
  return (
    <div>
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
