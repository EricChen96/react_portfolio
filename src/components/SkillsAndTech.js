import { useState } from "react";

function SkillsAndTech(props) {

    const [project, setProject] = useState();

    const handleProjectSelect = (project) => {
        setProject(project);
        console.log(project);
    };

    return (
        <div >
            <h3>
                Below are a few of the skills and technologies that I have learned to complete the projects below:
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={process.env.PUBLIC_URL + "/logos/javascriptIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="javascript" alt="javascript" />
                <img src={process.env.PUBLIC_URL + "/logos/javaIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="java" alt="java" />
                <img src={process.env.PUBLIC_URL + "/logos/mongoDBIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="mongoDB" alt="mongoDB" />
                <img src={process.env.PUBLIC_URL + "/logos/nodeJSIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="nodeJS" alt="nodeJS" />
                <img src={process.env.PUBLIC_URL + "/logos/reactIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="react" alt="react" />
            </div>
            <h3>
                Using these, I have coded the following projects:
            </h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {props.projects.map((project) => (
                    <label className="btn btn-secondary" key={project.title}>
                        <input type="radio" name={project.title} id={project.title}  onClick={() => handleProjectSelect(project)} /> {project.title}
                    </label>
                ))}
            </div>

            {project !== undefined &&
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

            }

        </div >
    )
}

export default SkillsAndTech;