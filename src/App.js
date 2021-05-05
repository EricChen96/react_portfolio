import React, { useReducer, useRef } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";



function App() {
  return (
    <Router>
      <div>
        <main className="container" style={{marginTop: "5%"}}>
          <div className="row">
            <div className="col-md-4">
              <SideBar  />
            </div>
            <div className="col-md-8 searchProjectPanel">
              <main className="row">
                <Switch>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path={["/about", "/"]}>
                    <AboutMe />
                  </Route>
                </Switch>
              </main>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
