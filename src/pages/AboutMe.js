import WelcomeBanner from "../components/WelcomeBanner";



function AboutMe() {
    return (
        <div>
            <section className="row">
                <div className="col-md-12">
                    <WelcomeBanner />
                    <divv className="box">
                        <img src={process.env.PUBLIC_URL + "/images/Profile_Picture.png"} className="profile-picture" alt="Profile Picture" />
                    </divv>

                    <a href="https://github.com/EricChen96">Visit My Github</a> <br />
                    <a href="https://linkedin.com/in/eric-chen-48724b110">Visit My LinkedIn</a>
                    <br />
                    <div>Email: ericchen201896@gmail.com</div>
                    <div>Phone: 858-302-8429</div>

                </div>
            </section>

        </div>
    )
}

export default AboutMe;