import React from "react";
import classes from "./Loader.module.css";
import MyModal from "../../MyModal/MyModal";

const Loader = () => {
  return (
    <MyModal visible={true}>
      <div className={classes.loader}></div>
    </MyModal>
  );
};

export default Loader;
