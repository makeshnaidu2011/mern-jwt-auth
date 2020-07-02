import React from "react";
import { Link } from "react-router-dom"

function Menu(props) {
    console.log(props.name)
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
            {props.name === "Admin" && <><Link to="/ContactUs"> <li>
                Admin pannel
            </li></Link><Link to="/ContactUs"> <li>
                    User Config
            </li></Link></>}


        </ul >
    </div >)
}


export default Menu;