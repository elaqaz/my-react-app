// Import necessary components and libraries
import React from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
src/components/NavBar
import Home from './Home'; // Import Home from the same directory
import About from './components/About';
// Import other components

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Add routes for other sections */}
      </Switch>
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
