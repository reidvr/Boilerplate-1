import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import Sass from "../css/main.scss";// Needed for webpack to know where to grab the Sass file so it can compile it. Not sure if there is a better way?

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
