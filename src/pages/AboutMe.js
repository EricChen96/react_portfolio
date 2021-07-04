import WelcomeBanner from "../components/WelcomeBanner";
import AboutMeIconsPopup from "../components/AboutMeIconsPopup";
import { Animated } from "react-animated-css";

function AboutMe() {
    return (
        <div>
            <section className="row">
                <div className="col-md-12">
                    <div>
                        <WelcomeBanner />
                    </div>
                    <Animated animationInDelay={4000} animationIn="fadeIn" isVisible={true}>
                        <AboutMeIconsPopup />
                    </Animated>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;