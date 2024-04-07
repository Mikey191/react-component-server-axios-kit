import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import NavbarButton from "./NavbarButton";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLinks}>
        <Link to="/about">
          <p className={classes.linksItem}>About</p>
        </Link>
        <Link to="/posts">
          <p className={classes.linksItem}>Posts</p>
        </Link>
      </div>
      <NavbarButton onClick={logout}>
        <p>Выход</p>
      </NavbarButton>
    </div>
  );
};

export default Navbar;
