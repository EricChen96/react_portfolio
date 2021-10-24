import { useState } from "react";

function SkillsAndTech(props) {

    const [project, setProject] = useState(props.projects[0]);

    const handleProjectSelect = (project) => {
        setProject(project);
    };

    return (
        <div >
            <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ width: "100%", marginTop: "10px" }}>
                {props.projects.map((project) => (
                    <label className="btn btn-secondary" key={project.title} style={{ width: "90%", marginRight: "5px", marginLeft: "5px" }}>
                        <input type="radio" name={project.title} id={project.title} onClick={() => handleProjectSelect(project)} /> {project.title}
                    </label>
                ))}
            </div>

            {project !== undefined &&
                <div className="card mt-3">
                    <div className="card-header">{project.title}</div>
                    <div className="row">
                        <div className="col-7">

                            <img src={process.env.PUBLIC_URL + project.image} className="card-img" alt={project.title} />
                        </div>
                        <div className="col-5">

                            <div><span style={{ fontWeight: "bold" }}>Description: </span>{project.description}</div>
                            <br />

                            <div><span style={{ fontWeight: "bold" }}>Techologies Used: </span>{project.technologies}</div>
                            <br />
                            {project?.link && (
                                <div>
                                    <div>
                                        <span style={{ fontWeight: "bold" }}>Site: </span>
                                        <a href={project.link}>{project.link}</a>
                                    </div>
                                    <br />
                                </div>
                            )}
                            {project.github?.map(githubLink => (
                                <div>
                                    <span style={{ fontWeight: "bold" }}>Github: </span>
                                    <a href={githubLink}>{githubLink}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            }

        </div >
    )
}

export default SkillsAndTech;