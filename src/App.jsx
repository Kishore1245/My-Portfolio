import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Components/profile/Portfolio";
import Contact from "./Components/Source/Contact";
import Skills from "./Components/Source/Skills";
import Footer from "./Components/layout/Footer";
import Projects from "./Components/Source/Projects";
import Resume from "./Components/Source/Resume";
import About from "./Components/Source/About";
import NavBar from "./Components/layout/Navbar";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
