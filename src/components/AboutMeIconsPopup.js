import { FaJava, FaReact, FaAws } from "react-icons/fa";
import { DiCss3Full, DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import { SiJavascript, SiSpring, SiHeroku } from "react-icons/si"
import { AiOutlineHtml5 } from "react-icons/ai"
import { BsBootstrap } from "react-icons/bs"

function AboutMeIconsPopup() {

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-4" >
                    <img src={process.env.PUBLIC_URL + "/images/Profile_Picture.png"} style={{ borderRadius: "50%", display: "block", marginRight: "auto", width: "75%", }} className="profile-picture" alt="ProfilePicture" />
                </div>
                <div className="col-8" style={{ color: "white" }}>
                    <h3>About Me</h3>
                    <text>
                        As a developer, I try to constantly expand my skills and knowledge by learning and incorporating new technologies into my projects.
                    </text>
                    <br></br>
                    <br></br>
                    <text >
                        Below are a few technologies that I have learned and used
                    </text>
                    <br></br>
                    <table className="table mt-3">
                        <tbody>
                            <tr style={{ color: "white" }}>
                                <td>
                                    Java:
                                    <FaJava size={30} />
                                </td>
                                <td>
                                    Javascript:
                                    <SiJavascript size={30} />
                                </td>
                                <td>
                                    HTML:
                                    <AiOutlineHtml5 size={30} />
                                </td>
                                <td>
                                    CSS:
                                    <DiCss3Full size={30} />
                                </td>
                            </tr>
                            <tr style={{ color: "white" }}>
                                <td>
                                    React:
                                    <FaReact size={30} />
                                </td>
                                <td>
                                    MongoDB:
                                    <DiMongodb size={30} />
                                </td>
                                <td>
                                    MySQL:
                                    <DiMysql size={30} />
                                </td>
                                <td>
                                    Spring:
                                    <SiSpring size={30} />
                                </td>
                            </tr>
                            <tr style={{ color: "white" }}>
                                <td>
                                    AWS:
                                    <FaAws size={30} />
                                </td>
                                <td>
                                    Heroku:
                                    <SiHeroku size={30} />
                                </td>
                                <td>
                                    Node:
                                    <DiNodejs size={30} />
                                </td>
                                <td>
                                    Bootstrap:
                                    <BsBootstrap size={30} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    )
}

export default AboutMeIconsPopup;