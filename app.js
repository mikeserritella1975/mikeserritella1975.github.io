import React from "react";
import ReactDOM from "react-dom";
import animals from "animals.js"

const title= "";
let header = (title === "") ? 'Click an animal for a fun fact': "";
const animalFacts = 'Click an animal for a fun fact!';

ReactDOM.render(animalFacts,document.getElementById("root"));

