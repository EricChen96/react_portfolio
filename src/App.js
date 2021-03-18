import React, { useReducer, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

const projectList = [
  {
    title: "Lyrical Artistry",
    description: "Lyrical Artistry is a group project between me and three other friends. Lyrical Artistry allows users to search up their favorite quotes and append it to an image. Furthermore, they can edit the image by adding more pictures or texts, and drawing. The user can also save the image to their portfolio and then share it with friends.",
    link: "https://lyrical-artistry.herokuapp.com/searchLyrics",
    github: "https://github.com/bcraig-13/lyrical-artistry",
    image: "/images/lyrical_industry_screenshot.png",
    technologies: "Javascript, MongoDB, React, AWS S3, Axios, KanvasConva, MusixMatch API, HTML, CSS"
  },
  {
    title: "Marvel Hero Finder",
    description: "Marvel Hero Finder is a site perfect for comic fans. Users can search up their favorite Marvel characters from the comics and pull up information on the characters such as their biographies, stats, and images",
    link: "https://anzelcapparelli.github.io/marvelHeroFinder/",
    github: "https://github.com/anzelcapparelli/marvelHeroFinder",
    image: "/images/marvel_screenshot.png",
    technologies: "Javascript, MySQL, JQuery, chartJS, HTML, CSS, Marvel API, Superhero API, GIPHY API"
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
