import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import fontawesome from "@fortawesome/fontawesome";
import freeSolidIcons from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(freeSolidIcons);

ReactDOM.render(<App />, document.getElementById("root"));
