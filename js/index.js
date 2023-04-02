//-----Imports------
import { primaryPlanetSkeleton,  makePlanet } from "./planets.js";
import { drawPlanet } from "./draw.js";
import { updateMotion } from "./physics.js";

//------Initilization------------

let canvas = document.querySelector('#Solarcanvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')


//drawPlanet(ctx, primaryPlanetSkeleton)
//drawPlanet(ctx, makePlanet('green', undefined, 6, 100))

let planets = {

}


function setAnimation() {

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    let totalPlanets = Object.keys(planets)

    for (let i=0; i < totalPlanets.length; i++) {
        if (totalPlanets.length >= 0) {

            let requiredVelocity =  updateMotion({...planets[totalPlanets[i]]}, {...planets})
            planets[totalPlanets[i]].velocity.xaxis += requiredVelocity.x
            planets[totalPlanets[i]].velocity.yaxis += requiredVelocity.y

            planets[totalPlanets[i]].xaxis += planets[totalPlanets[i]].velocity.xaxis
            planets[totalPlanets[i]].yaxis += planets[totalPlanets[i]].velocity.xaxis
            drawPlanet(ctx, planets[totalPlanets[i]])
        }
    }
    //console.log(planets)
    requestAnimationFrame(setAnimation)
    
}

document.addEventListener('click', (e) => {
    const x = e.clientX
    const y = e.clientY
    const key = Date.now().toString()
    planets[key] = makePlanet('green', undefined, 50, x, y)
})

setAnimation()
