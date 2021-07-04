import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import { BsFillHouseFill, BsCodeSlash } from "react-icons/bs";

function SecondSideBar(props) {
    return (

        <ProSidebar>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <MenuItem icon={<BsFillHouseFill />}>
                    <Link to="/about" >
                    </Link>
                </MenuItem>
                <MenuItem icon={<BsCodeSlash />}>
                    <Link to="/projects" >
                    </Link>
                </MenuItem>
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