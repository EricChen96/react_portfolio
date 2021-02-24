import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div>
            <button className="btn btn-primary col-12 mx-auto mt-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#mainNavigationSidebar" aria-expanded="false" aria-controls="mainNavigationSidebar">
                Main Profile
                </button>
            <div className="collapse" id="mainNavigationSidebar">
                <div className="card card-body">
                    {/* <a className="btn btn-primary col-12 mx-auto mt-2" href="../index.html">
                        About Me
                    </a> */}
                    <Link to="/about" className="btn btn-primary col-12 mx-auto mt-2">About Me</Link>
                    {/* <a className="btn btn-primary col-12 mx-auto mt-2" href="./contact.html">
                        Contact
                    </a> */}
                    <Link to="/contact" className="btn btn-primary col-12 mx-auto mt-2">Contact</Link>
                </div>
            </div>
            <button className="btn btn-primary col-12 mx-auto mt-2 projectPortfolioButton" type="button"
                data-bs-toggle="collapse" data-bs-target="#portfolioSidebar" aria-expanded="false"
                aria-controls="portfolioSidebar">
                Project Portfolio
            </button>
            <div className="collapse" id="portfolioSidebar">
                <div className="card card-body">
                    {/* <a className="btn btn-primary col-12 mx-auto mt-2" href="./searchProjectScreen.html">
                        Search Bar
                    </a> */}
                    <Link to="/projects" className="btn btn-primary col-12 mx-auto mt-2">Projects</Link>
                    <div className="recentSearchesButtonsList">
                        {/* <!-- <a className="btn btn-primary col-12 mx-auto mt-2"
                            href="https://anzelcapparelli.github.io/marvelHeroFinder/">
                            Marvel Hero Finder
                            </a> --> */}
                    </div>
                </div>
            </div>
            <a className="btn btn-primary col-12 mx-auto mt-2" href="./resume.pdf" download>Resume</a>
        </div>

    )
}

export default SideBar;