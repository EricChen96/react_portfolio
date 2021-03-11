import { Link } from "react-router-dom";

function SideBar(props) {
    return (
        <div>
            <Link to="/about" className="btn btn-primary col-12 mx-auto mt-2">
                <img src={process.env.PUBLIC_URL + "/logos/home.png"} style={{
                    objectFit: "contain",
                    width: "50px"
                }} alt="home" />
            </Link>
            <Link to="/contact" className="btn btn-primary col-12 mx-auto mt-2">
                <img src={process.env.PUBLIC_URL + "/logos/contact.png"} style={{
                    objectFit: "contain",
                    width: "50px"
                }} alt="home" />
            </Link>
            <Link to="/projects" className="btn btn-primary col-12 mx-auto mt-2">
                <img src={process.env.PUBLIC_URL + "/logos/code.png"} style={{
                    objectFit: "contain",
                    width: "50px"
                }} alt="home" />
            </Link>
            <a className="btn btn-primary col-12 mx-auto mt-2" href={process.env.PUBLIC_URL + "/resume.pdf"} download>            <Link to="/contact" className="btn btn-primary col-12 mx-auto mt-2">
                <img src={process.env.PUBLIC_URL + "/logos/resume.png"} style={{
                    objectFit: "contain",
                    width: "50px"
                }} alt="home" />
            </Link></a>
        </div>

    )
}

export default SideBar;