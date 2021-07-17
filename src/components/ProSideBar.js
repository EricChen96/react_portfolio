import { ProSidebar, Menu, SidebarHeader, SidebarFooter, SidebarContent, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import { BsFillHouseFill, BsCodeSlash } from "react-icons/bs";
import 'react-pro-sidebar/dist/css/styles.css';

function SecondSideBar(props) {
    return (

        <ProSidebar style={{ height: "100vh" }}>
            <Menu iconShape="square">
                <MenuItem style={{display: "flex", alignItems:"center"}}>
                    <Link to="/about" >
                        <BsFillHouseFill style={{ fontSize: "30px" }} />
                        <div>About </div>
                    </Link>
                </MenuItem>
                <MenuItem >
                    <Link to="/projects" >
                        Projects
                        <BsCodeSlash />
                    </Link>
                </MenuItem>
            </Menu>
            <SidebarFooter>

            </SidebarFooter>
        </ProSidebar>
    )
}

export default SecondSideBar;