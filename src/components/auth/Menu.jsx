import React, { useContext } from "react";
import { Link } from "react-router-dom"
import UserContext from "../../context/UserContext"

function Menu() {
    const { userData } = useContext(UserContext);
    return (<div className="Menu">
        <ul className="link-items">
            <Link to="/"> <li>
                Home
            </li></Link>
            <Link to="/About"> <li>
                About
            </li></Link><Link to="/Products"> <li>
                Products
            </li></Link><Link to="/Services"> <li>
                Services
            </li></Link><Link to="/ContactUs"> <li>
                Contact us
            </li></Link>
            {userData.user.displayName === "Admin" && <><Link to="/AdminPanel"> <li>
                Admin pannel
            </li></Link><Link to="/UserConfig"> <li>
                    User Config
            </li></Link></>}


        </ul >
    </div >)
}


export default Menu;