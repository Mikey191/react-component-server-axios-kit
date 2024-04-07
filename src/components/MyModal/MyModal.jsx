import React from "react";
import classes from "./MyModal.module.css";

const MyModal = (props) => {
  const rootClasses = [classes.myModal];
  if (props.visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => props.setVisible(false)}
    >
      <div
        className={classes.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};

export default MyModal;
