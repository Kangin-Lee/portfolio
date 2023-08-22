import "./App.css";
import AboutMe from "./Layout/AboutMe";
import Archiving from "./Layout/Archiving";
import Footer from "./Layout/Footer";
import Introduce from "./Layout/Introduce";
import Project from "./Layout/Project";
import Skill from "./Layout/Skill";

function App() {
  return (
    <div>
      <Introduce />
      <AboutMe />
      <Skill />
      <Project />
      <Archiving />
      <Footer />
    </div>
  );
}

export default App;
