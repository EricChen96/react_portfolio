import React, { useReducer, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SideBar from "./components/SideBar";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <main className="container">
          <div className="row">
            <div className="col-md-4">
              <SideBar />
            </div>
            <div className="col-md-8 searchProjectPanel">
              <main className="row">
                <div className="col-md-6">
                  <Switch>
                    <Route exact path = "/contact">
                      <Contact />
                    </Route>
                    <Route exact path = {["/","/about"]}>
                      <AboutMe />
                    </Route>
                  </Switch>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
