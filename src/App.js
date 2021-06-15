import React, { useReducer, useRef } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

import ProSideBar from './components/ProSideBar';


function App() {
  return (
    <Router>
      <div>
        <main className="container" >
          <div className="row">
            <div className="col-md-4" style={{ marginLeft: "-50px" }}>
              <ProSideBar></ProSideBar>
              {/* <SideBar /> */}
            </div>
            <div className="col-md-8 searchProjectPanel">
              <div style={{ marginTop: "5%" }}></div>
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
