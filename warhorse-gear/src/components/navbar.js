import React from "react";
import "./navbar.css";
const Navbar = () => {
    return (
        <div className="component">
            <div className="overlap-group">
                <div className="rectangle" />
                <div className="text-wrapper">Home</div>
                <div className="div">Shop</div>
                <img className="white-profile" alt="Whietprofile" src="../images/whiteprofile.png" />
                <div className="ellipse" />
                <img className="warhorse-gear-logo" alt="Warhorse gear logo c" src="../images/warhorse-gear-logo.png" />
            </div>
        </div>
    );
};

export default Navbar;


