import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

function SecondSideBar(props) {
    return (

        <ProSidebar>
            <SidebarHeader>
                {/**
     *  You can add a header for the sidebar ex: logo
     */}
            </SidebarHeader>
            <SidebarContent>
                <Link to="/about" className="btn btn-primary col-12 mx-auto mt-2">
                    <img src={process.env.PUBLIC_URL + "/logos/home.png"} style={{
                        objectFit: "contain",
                        width: "50px"
                    }} alt="home" />
                </Link>
            </SidebarContent>
            <SidebarFooter>
                {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
            </SidebarFooter>
        </ProSidebar>
    )
}

export default SecondSideBar;