import WelcomeBanner from "../components/WelcomeBanner";
import { Animated } from "react-animated-css";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

const links = "Visit My LinkedIn Or Github For More Information"

function Home() {

    return (
        <div style={{ width: "100vw", height: "90vh", backgroundColor:"#1A1A1D" }}>
            <WelcomeBanner />
            <Animated animationIn="fadeIn" animationInDelay={8400} isVisible={true} style={{ color: "white", paddingLeft: "50px", marginTop: "50px", paddingTop: "50px", textAlign: "center", fontSize: "40px" }}>
                {links}
            </Animated>
            <Animated animationIn="fadeIn" animationInDelay={8400} isVisible={true} style={{ color: "white", paddingLeft: "50px", paddingTop: "50px", textAlign: "center", fontSize: "40px" }}>
                <button type="button" class="btn btn-outline-light mr-5" >
                    <AiOutlineLinkedin size={50} />
                </button>
                <button type="button" class="btn btn-outline-light ml-5">
                    <AiOutlineGithub size={50} />
                </button>
            </Animated>
        </div>
    )
}

export default Home;