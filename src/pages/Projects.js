

function Projects(props) {
    return (
        <div>
            {props.projectList.map((project) => (
                <div className="card text-center">
                    <div className="card-header">{project.title}</div>
                    <img src={process.env.PUBLIC_URL + project.image} className="card-img" alt={project.title}/>
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