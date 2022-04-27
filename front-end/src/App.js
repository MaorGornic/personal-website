import "./App.css";
import Home from "./PortfolioComponents/Home/Home";
import AboutMe from "./PortfolioComponents/AboutMe/AboutMe";
import Experience from "./PortfolioComponents/Experience/Experience";
import Projects from "./PortfolioComponents/Projects/Projects";
import Education from "./PortfolioComponents/Education/Education";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
