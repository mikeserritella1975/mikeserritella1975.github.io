const title= "";
let header = (title === "") ? 'Click an animal for a fun fact': "";
const animalFacts = <h1> Click an animal for a fun fact! </h1>;
client.flushall(function (err, reply) {
 t.error(err)
 t.strictEqual(reply, 'OK')


import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(animalFacts,document.getElementById("root"));

