import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Loader from "./components/Loader";

function appRenderer() {
  if (window.configLoded) {
    ReactDOM.render(<App />, document.getElementById("root"));
  } else {
    ReactDOM.render(<Loader />, document.getElementById("loading"));
  }
}

const intervalId = setInterval(() => {
  appRenderer();
  if (window.configLoded) {
    clearInterval(intervalId);
    const loaderEl = document.getElementById("loading");
    if(loaderEl){
      loaderEl.remove();
    }
  }
}, 1000);
