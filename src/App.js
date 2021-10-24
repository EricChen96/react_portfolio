import React, { useReducer, useRef } from "react";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // {/* <section id="home" style={{ backgroundColor: "#1A1A1D" }}> */ }
  return (
    <Router >
      <NavBar />
      <Switch>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path={["/home", "/"]}>
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
