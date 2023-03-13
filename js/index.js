//-----Imports------
import { primaryPlanetSkeleton,  makePlanet } from "./planets.js";
import { drawPlanet } from "./draw.js";

//------Initilization------------

let canvas = document.querySelector('#Solarcanvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')


//drawPlanet(ctx, primaryPlanetSkeleton)
//drawPlanet(ctx, makePlanet('green', undefined, 6, 100))

let planets = {
    0:  makePlanet('green', undefined, 6, 100),
    1: makePlanet('green', undefined, 6, 100),
    2: makePlanet('lightgreen', undefined, 100, 400, 500),
    3: makePlanet('white', undefined, 10, 200),

}


function setAnimation() {

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    let totalPlanets = Object.keys(planets)

    for (let i=0; i < totalPlanets.length; i++) {
        
        drawPlanet(ctx, planets[totalPlanets[i]])
        
    }
    

    setInterval(setAnimation, 10000)

}

document.addEventListener('keydown', (e) => {
    
        
})

requestAnimationFrame(setAnimation)
