import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={ProfileSection} />
        <Route path="/skills" component={SkillsSection} />
        <Route path="/projects" component={ProjectsSection} />
        <Route path="/contact" component={ContactSection} />
      </Routes>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <div>
//       <Header />

//     </div>
//   );
// }

// export default App;
