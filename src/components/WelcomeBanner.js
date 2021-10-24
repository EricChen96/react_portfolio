import TypeWriterEffect from 'react-typewriter-effect';

const helloWorld = "<Hello World>";
const helloThere = "<Hello There>";
const welcome = "Welcome To My Portfolio";
const introduction = "My Name Is Eric And I Am A Fullstack Web Developer Based In San Diego, CA";

function AboutMe() {
    return (
        <div style={{ width: "100%", height: "220px", paddingLeft: "50px", paddingTop: "50px"}}>
            <TypeWriterEffect
                startDelay={100}
                cursorColor="white"
                typeSpeed={40}
                hideCursorAfterText="true"
                textStyle={{ color: "white" }}
                multiText={[
                    helloWorld, helloThere
                ]}
                multiTextDelay={500}
            />
            <br></br>
            <TypeWriterEffect
                startDelay={3000}
                cursorColor="white"
                text={welcome}
                typeSpeed={40}
                hideCursorAfterText="true"
                textStyle={{ color: "white" }}
            />
            <br></br>
            <TypeWriterEffect
                startDelay={5000}
                cursorColor="white"
                text={introduction}
                typeSpeed={40}
                hideCursorAfterText="true"
                textStyle={{ color: "white" }}
            />

        </div>
    )
}

export default AboutMe;