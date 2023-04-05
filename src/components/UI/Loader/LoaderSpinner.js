import React from "react";

import classes from "./LoaderSpinner.module.css";
const LoaderSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>;
    </div>
  );
};

export default LoaderSpinner;
