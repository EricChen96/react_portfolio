import TypeWriterEffect from 'react-typewriter-effect';

const titleBanner = "Welcome To My Portfolio";
const introduction = "My name is Eric and I am a fullstack web developer based in San Diego, CA";

function AboutMe() {
    return (
        <div style={{width: "100%", height: "300px"}}>
            <TypeWriterEffect
                startDelay={100}
                cursorColor="black"
                text={titleBanner}
                typeSpeed ={50}
                hideCursorAfterText = "true"
            />
            <br></br>
            <TypeWriterEffect
                startDelay={2500}
                cursorColor="black"
                text={introduction}
                typeSpeed ={50}
                hideCursorAfterText = "true"
            />
        </div>
    )
}

export default AboutMe;