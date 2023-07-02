//-----Imports------
import { drawPlanet } from "./draw.js";
import { mouse } from "./utility.js";
import {Planets} from "./planets.js"
import { DEFAULT_PLANET_RADIUS } from "./CONSTANTS.js";
import { physics } from "./physics.js";

// GLOBAL INITILIZATION
let canvas = document.querySelector("#Solarcanvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
let particles = []

function setAnimation() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let total_particles = particles.length
    if (total_particles > 1) {
        physics(particles)
    }
    for (let i = 0; i < total_particles; i++) {
        drawPlanet(ctx, particles[i]);
    }
    requestAnimationFrame(setAnimation);
}


function main() {

    

    document.addEventListener('click', (event) => {
        mouse.position.x = event.clientX - canvas.getBoundingClientRect().left
        mouse.position.y = event.clientY - canvas.getBoundingClientRect().top

        particles.push(new Planets(mouse.position.clone(), DEFAULT_PLANET_RADIUS))
    });

    setAnimation();
}

main()