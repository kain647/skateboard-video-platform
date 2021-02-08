import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Skateboard from "./skateboard";
import bgImage from "./upload/background.jpg";

ReactDOM.render(
  <React.StrictMode>
    <Skateboard bg={bgImage} />
  </React.StrictMode>,
  document.getElementById("root")
);
