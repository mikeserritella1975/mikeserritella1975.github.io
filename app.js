import React from "react";
import ReactDOM from "react-dom";
import animals from "https://mikeserritella1975.github.io/animals.js";

const title= "";
let header = (title === "") ? 'Click an animal for a fun fact': "";
const animalFacts = <h1> Click an animal for a fun fact! </h1>;

ReactDOM.render(animalFacts,document.getElementById("root"));

