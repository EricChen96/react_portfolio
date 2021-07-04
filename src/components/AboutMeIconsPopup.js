function AboutMeIconsPopup() {

    return (
        <div className="row">
            <div className="col-md-6" style={{minWidth: "300px"}}>
                <img src={process.env.PUBLIC_URL + "/images/Profile_Picture.png"} style={{ borderRadius: "50%", display: "block",  marginRight: "auto", width: "100%", height: "auto"}} className="profile-picture" alt="ProfilePicture" />
            </div>
            <div className="col-md-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <a href="https://github.com/EricChen96" >
                        <img src={process.env.PUBLIC_URL + "/logos/githubIcon.png"} style={{ marginTop: "20px", width: "50px", height: "50px" }} className="github" alt="github" />
                    </a>
                    <div style={{ marginTop: "15px", marginLeft: "10px" }}>https://github.com/EricChen96</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <a href="https://linkedin.com/in/eric-chen-48724b110">
                        <img src={process.env.PUBLIC_URL + "/logos/linkedInIcon.png"} style={{ marginTop: "20px", width: "50px" }} className="linkedIn" alt="linkedIn" />
                    </a>
                    <div style={{ marginTop: "15px", marginLeft: "10px" }}>eric-chen-48724b110</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <a href="mailto: ericchen201896@gmail.com" >
                        <img src={process.env.PUBLIC_URL + "/logos/emailIcon.png"} style={{ marginTop: "20px", width: "50px" }} className="email" alt="email" />
                    </a>
                    <div style={{ marginTop: "15px", marginLeft: "10px" }}>ericchen201896@gmail.com</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <a href="tel: 858-302-8429">
                        <img src={process.env.PUBLIC_URL + "/logos/phoneIcon.png"} style={{ marginTop: "20px", width: "50px" }} className="phone" alt="phone" />
                    </a>
                    <div style={{ marginTop: "15px", marginLeft: "10px" }}>858-302-8429</div>
                </div>
            </div>
        </div >
    )
}

export default AboutMeIconsPopup;