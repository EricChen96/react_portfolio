function AboutMeIconsPopup() {

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + "/images/Profile_Picture.png"} style={{ borderRadius: "50%", display: "block", marginLeft: "0", marginRight: "auto" }} className="profile-picture" alt="ProfilePicture" />
            </div>
            <div className="col-md-6">
                <a href="https://github.com/EricChen96" >
                    <img src={process.env.PUBLIC_URL + "/logos/githubIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="github" alt="github" />
                </a>
                <div style={{ float: "right", marginTop: "27px" }}>https://github.com/EricChen96</div>
                <br />
                <a href="https://linkedin.com/in/eric-chen-48724b110">
                    <img src={process.env.PUBLIC_URL + "/logos/linkedInIcon.png"} style={{ marginTop: "20px", width: "50px" }} className="linkedIn" alt="linkedIn" />
                    eric-chen-48724b110
                </a>
                <br />
                <a href="mailto: ericchen201896@gmail.com" >
                    <img src={process.env.PUBLIC_URL + "/logos/emailIcon.png"} style={{ marginTop: "20px", width: "50px" }} className="email" alt="email" />
                    ericchen201896@gmail.com
                </a>
                <br />
                <a href="tel: 858-302-8429">
                    <img src={process.env.PUBLIC_URL + "/logos/phoneIcon.png"} style={{ marginTop: "20px", width: "50px" }} className="phone" alt="phone" />
                    858-302-8429
                </a>
            </div>
        </div >
    )
}

export default AboutMeIconsPopup;