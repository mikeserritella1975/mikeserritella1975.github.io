import { animals } from 'https://mikeserritella1975.github.io/animals.js';


let header = (title === "") ? 'Click an animal for a fun fact': "";

const background = <img className="background" alt="ocean" src='ocean.jpg'/>;

const animalFacts = <div ><h1> {header} </h1>{background}<div className='animals'>images</div> </div>;


ReactDOM.render(animalFacts,document.getElementById("root"));

