import ListOfProjects from "../components/Projects";


const projectList = [
  {
    title: "Contruction Management System",
    description: "Construction Management System was a collaboration project with three other colleagues. It allowed user to track projects, tasks, and employees and make requests to other microservice such as requests for materials or machineries. ",
    github: ["https://github.com/EricChen96/constructionManagementSystem", "https://github.com/EricChen96/construction-config-server"],
    image: "/images/construction_management_system_screenshot.png",
    technologies: "Java, Javascript, Spring Boot, MySQL, React, Axios, Microservices, HTML, CSS"
  },
  {
    title: "Lyrical Artistry",
    description: "Lyrical Artistry is a group project between me and three other friends. Lyrical Artistry allows users to search up their favorite quotes and append it to an image. Furthermore, they can edit the image by adding more pictures or texts, and drawing. The user can also save the image to their portfolio and then share it with friends.",
    link: "https://lyrical-artistry-new.herokuapp.com/",
    github: ["https://github.com/EricChen96/lyrical-artistry"],
    image: "/images/lyrical_industry_screenshot.png",
    technologies: "Javascript, MongoDB, React, AWS S3, Socket.Io, Axios, KanvasConva, MusixMatch API, HTML, CSS"
  },
  {
    title: "Weather Dashboard",
    description: "A site that allows you to find out the weather of a city! See the current weather and the next 5 da forcast.",
    link: "https://ericchen96.github.io/Weather-Dashboard-React/",
    github: ["https://github.com/EricChen96/Weather-Dashboard-React"],
    image: "/images/weather_dashboard_screenshot.png",
    technologies: "React, Javascript, CSS, HTML, Bootstrap, Open Weather API"
  },
  {
    title: "Online-Offline Budget Tracker",
    description: "Keep track of your budgets online or offline. The application is downloadable as a PWC and will update the app with any offline transactions once it reconnects.",
    link: "https://pwa-budget-tracker-ericchen96.herokuapp.com/",
    github: ["https://github.com/EricChen96/online_offline_budget_tracker"],
    image: "/images/online_offline_budget_tracker_screenshot.png",
    technologies: "Javascript, HTML, CSS, Service Worker"
  },
  {
    title: "Mean Game",
    description: "A simple typing game collaboration project with three other colleagues. Earn points from completing typing mini games and spend the points to buy areas on a map until you eventually take over.",
    link: "https://ucsdprojecttwo.herokuapp.com/",
    github: ["https://github.com/TechKoSpeaks/MeanGame"],
    image: "/images/meanest_game_screenshot.png",
  }
];

function Projects(props) {
  return (
    <div style={{ width: "100vw", height: "90vh", backgroundColor: "#1A1A1D" }}>
      <ListOfProjects projects={projectList} />
    </div>
  )
}

export default Projects;