import React from "react";
import classes from "./Navbar.module.css"

const NavbarButton = ({children, ...props }) => {
 return (
   <button {...props} className={classes.navbarButton}>
     {children}
   </button>
 );
}

export default NavbarButton;