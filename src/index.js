import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";



// ReactDOM.render(<Appv6 />, document.getElementById("root")); //this us used for new version of funtion



 ReactDOM.render(<App />, document.getElementById("root")); //this us used for new version of funtion


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
