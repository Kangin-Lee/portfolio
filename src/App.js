import "./App.css";
import AboutMe from "./Layout/AboutMe";
import Archiving from "./Layout/Archiving";
import Footer from "./Layout/Footer";
import Introduce from "./Layout/Introduce";
import Skill from "./Layout/Skill";

function App() {
  return (
    <div>
      <Introduce />
      <AboutMe />
      <Skill />
      <Archiving />
      <Footer />
    </div>
  );
}

export default App;
