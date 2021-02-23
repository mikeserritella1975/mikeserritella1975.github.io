import { animals } from './animals.js';


let header = (title === "") ? 'Click an animal for a fun fact': "";

const background = <img className="background" alt="ocean" src='ocean.jpg'/>;

const images = [];
for (const animal in animals){
	let internalImage = <img key:{animal} className:'animal' alt:{animal} src: {animals[animal].image} aria-label: {animal} role: 'button' />;
	images.push (internalImage);
}

const animalFacts = <div ><h1> {header} </h1>{background}<div className='animals'>images</div> </div>;


ReactDOM.render(animalFacts,document.getElementById("root"));

