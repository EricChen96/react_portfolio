function SkillsAndTech() {

    return (
        <div >
            <h3>
                Below are a few of the skills and technologies that I have learned to complete the projects below:
            </h3>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img src={process.env.PUBLIC_URL + "/logos/javascriptIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="javascript" alt="javascript" />
                <img src={process.env.PUBLIC_URL + "/logos/javaIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="java" alt="java" />
                <img src={process.env.PUBLIC_URL + "/logos/mongoDBIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="mongoDB" alt="mongoDB" />
                <img src={process.env.PUBLIC_URL + "/logos/nodeJSIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="nodeJS" alt="nodeJS" />
                <img src={process.env.PUBLIC_URL + "/logos/reactIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="react" alt="react" />
            </div>
        </div >
    )
}

export default SkillsAndTech;