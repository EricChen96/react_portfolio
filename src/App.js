import React, { useReducer, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <main class="container">
          <div class="row">
            <div class="col-md-4">
              <SideBar />
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
