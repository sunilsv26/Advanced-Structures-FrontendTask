import React from "react";
import classes from "./homePage.module.css";

const mainPage = () => {
  const updateList = (ev) => {};
  return (
    <div className={classes.MainPage}>
      <label>Select by : </label>
      <select onChange={(ev) => updateList(ev)}>
        <option>Characters</option>
        <option>Episodes</option>
      </select>
      <table className={classes.Table}>
        <caption>Breaking Bad</caption>
      </table>
    </div>
  );
};

export default mainPage;
