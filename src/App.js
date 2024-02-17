import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
