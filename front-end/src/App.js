import "./App.css";
import Home from "./PortfolioComponents/Home/Home";
import AboutMe from "./PortfolioComponents/AboutMe/AboutMe";
import Experience from "./PortfolioComponents/Experience/Experience";
import Projects from "./PortfolioComponents/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
