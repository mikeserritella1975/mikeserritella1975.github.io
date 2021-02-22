import React from "react";
import ReactDOM from "react-dom";
let animals = require ('./animals.js');

const title= "";
let header = (title === "") ? 'Click an animal for a fun fact': "";
const animalFacts = <h1> Click an animal for a fun fact! </h1>;

ReactDOM.render(animalFacts,document.getElementById("root"));

