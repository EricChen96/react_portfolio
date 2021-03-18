import SkillsAndTech from "../components/SkillsAndTech";

function Projects(props) {
    return (
        <div>
            <SkillsAndTech />
            {props.projectList.map((project) => (
                <div className="card mt-3">
                    <div className="card-header">{project.title}</div>
                    <img src={process.env.PUBLIC_URL + project.image} className="card-img" alt={project.title} />
                    <div><span style={{ fontWeight: "bold" }}>Description: </span>{project.description}</div>
                    <br />

                    <div><span style={{ fontWeight: "bold" }}>Techologies Used: </span>{project.technologies}</div>
                    <br />
                    <div>
                        <span style={{ fontWeight: "bold" }}>Site: </span>
                        <a href={project.link}>{project.link}</a>
                    </div>
                    <br />
                    <div>
                        <span style={{ fontWeight: "bold" }}>Github: </span>
                        <a href={project.github}>{project.github}</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;