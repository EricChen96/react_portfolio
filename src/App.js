import React, { useReducer, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SideBar from "./components/SideBar";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

const projectList = [
  {
    title: "Lyrical Artistry",
    description: "Search up your favorite quotes to append to an image. Then store the image in your personal profile and share with your friends.",
    link: "https://lyrical-artistry.herokuapp.com/searchLyrics",
    github: "https://github.com/bcraig-13/lyrical-artistry",
    image: "/images/lyrical_industry_screenshot.png"
  },
  {
    title: "Marvel Hero Finder",
    description: "A site for the Marvel Comic fanbase. Here, you can search up your favorite Marvel characters for their character biography!",
    link: "https://anzelcapparelli.github.io/marvelHeroFinder/",
    github: "https://github.com/anzelcapparelli/marvelHeroFinder",
    image: "/images/marvel_screenshot.png"
  },
  {
    title: "Weather Dashboard",
    description: "A site that allows you to find out the weather of a city! See the current weather and the next 5 da forcast.",
    link: "https://ericchen96.github.io/Weather_Dashboard/",
    github: "https://github.com/EricChen96/Weather_Dashboard",
    image: "/images/weather_dashboard_screenshot.png"
  },
  {
    title: "Code Quiz",
    description: "Play a quick code quiz game to refresh your Javascript knowledge!",
    link: "https://ericchen96.github.io/Code_Quiz/",
    github: "https://github.com/EricChen96/Code_Quiz",
    image: "/images/code_quiz_screenshot.png"
  },
  {
    title: "Employee Directory",
    description: "Keep track of employees",
    link: "https://ericchen96.github.io/employee_directory/",
    github: "https://github.com/EricChen96/employee_directory",
    image: "/images/employee_directory_screenshot.png"
  },
  {
    title: "Online-Offline Budget Tracker",
    description: "Keep track of your budgets online or offline",
    link: "https://pwa-budget-tracker-ericchen96.herokuapp.com/",
    github: "https://github.com/EricChen96/online_offline_budget_tracker",
    image: "/images/online_offline_budget_tracker_screenshot.png",
  },
  {
    title: "Mean Game",
    description: "Take over the world in a mean quote typing game",
    link: "https://ucsdprojecttwo.herokuapp.com/",
    github: "https://github.com/TechKoSpeaks/MeanGame",
    image: "/images/meanest_game_screenshot.png",
  }
];

function App() {
  return (
    <Router>
      <div>
        <main className="container">
          <div className="row">
            <div className="col-md-4">
              <SideBar projectList={projectList} />
            </div>
            <div className="col-md-8 searchProjectPanel">
              <main className="row">
                <Switch>
                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path={["/", "/about"]}>
                    <AboutMe />
                  </Route>
                  <Route exact path="/projects">
                    <Projects projectList={projectList} />
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
