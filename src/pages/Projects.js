const projectList = [
    {
        title: "Marvel Hero Finder",
        description: "Search up your favorite Marvel character!",
        link: "https://anzelcapparelli.github.io/marvelHeroFinder/",
        github: "https://github.com/anzelcapparelli/marvelHeroFinder",
        image: "/images/marvel_screenshot.png"
    },
    {
        title: "Weather Dashboard",
        description: "Find out the weather of a city!",
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


function Projects() {
    return (
        <div>
            {projectList.map((project) => (
                <div>
                    <div>Title: {project.title}</div>
                    <img src={process.env.PUBLIC_URL + project.image} alt={project.title} style={{width: "400px", height: "200px"}}/>
                    <div>{project.description}</div>
                    <a href={project.github}>{project.github}</a> 
                    <br></br>
                    <a href={project.link}>{project.link}</a>
                </div>
            ))}
        </div>
    )
}

export default Projects;