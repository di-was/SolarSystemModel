//-----Imports------
import { primaryPlanetSkeleton, makePlanet } from "./planets.js";
import { drawPlanet } from "./draw.js";
import { updateMotion2 } from "./physics.js";

//------Initialization------------
let canvas = document.querySelector('#Solarcanvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let planets = {};

function setAnimation() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let totalPlanets = Object.keys(planets);

    for (let i = 0; i < totalPlanets.length; i++) {
        if (totalPlanets.length > 1) {
            planets = updateMotion2(planets);

            planets[totalPlanets[i]].velocity.xaxis += planets[totalPlanets[i]].acceleration.xaxis;
            planets[totalPlanets[i]].velocity.yaxis += planets[totalPlanets[i]].acceleration.yaxis;

            planets[totalPlanets[i]].xaxis += planets[totalPlanets[i]].velocity.xaxis;
            planets[totalPlanets[i]].yaxis += planets[totalPlanets[i]].velocity.yaxis;
        }
        drawPlanet(ctx, planets[totalPlanets[i]]);
    }
    requestAnimationFrame(setAnimation);
}

document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const key = Date.now().toString();
    planets[key] = makePlanet('green', undefined, 50, x, y);
});

setAnimation();
