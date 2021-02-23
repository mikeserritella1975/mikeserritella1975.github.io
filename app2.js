
const title= "";
let header = (title === "") ? 'Click an animal for a fun fact': "";

const background = <img className="background" alt="ocean" src='ocean.jpg'/>
const animalFacts = <div ><h1> {header} </h1>{background}</div>;




ReactDOM.render(animalFacts,document.getElementById("root"));

