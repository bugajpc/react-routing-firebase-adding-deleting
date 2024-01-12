import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Posts</Link></li>
                <li><Link to="/add-post">Add Post</Link></li>
            </ul>
        </div>
    )
}
export default NavBar