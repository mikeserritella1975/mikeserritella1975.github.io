import { animals } from './animals';
var title = "";
var header = title === "" ? 'Click an animal for a fun fact' : "";
var background = /*#__PURE__*/React.createElement("img", {
  className: "background",
  alt: "ocean",
  src: "ocean.jpg"
});
var animalFacts = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " ", header, " "), background, /*#__PURE__*/React.createElement("div", {
  className: "animals"
}, "images"), " ");
ReactDOM.render(animalFacts, document.getElementById("root"));