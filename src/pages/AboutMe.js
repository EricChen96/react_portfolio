function AboutMe() {
    return (
        <div>
            <header className="row">
                <main className="col-md-12">
                    <h1>Eric Chen</h1>
                </main>
            </header>
            <section className="row">
                <section className="col-md-12">
                    <div className="box">
                        <img src="./assets/Profile_Picture.png" className="profile-picture" alt="Profile Picture" />
                        <div className="hover-reveal profileParagraph">
                            I am an aspriring professional programmer who hopes to eventually land a job at a
                            Fortune
                            500 company. I grew up primarily in Toronto and really grew to love the city. After
                            obtaining an accounting degree from the University of Toronto and working a few
                            years in the field, I decided to pursue my hobby of computer programming because the
                            field
                            intrigued and appealed to me.
                            </div>
                    </div>

                    <a href="https://github.com/EricChen96">Visit My Github</a> <br />
                    <a href="https://linkedin.com/in/eric-chen-48724b110">Visit My LinkedIn</a>
                    <br />

                    <p className="profileParagraph">
                        My other hobbies include:
                        </p>
                    <ul className="profileParagraph">
                        <li>watching and playing basketball</li>
                        <li>playing videogames</li>
                        <li>cooking</li>
                        <li>hiking</li>
                    </ul>

                </section>
            </section>
            <section className="row">
                <section className="col-md-12">
                    <p className="profileParagraph">
                        The programming languages that I hope to master are:
                        </p>
                    <ul className="profileParagraph">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </section>
            </section>
        </div>
    )
}

export default AboutMe;