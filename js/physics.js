import { check_collsions, resolve_collision } from "./utility.js";
import { UNIVERSAL_GRAVITATIONAL_CONSTANT } from "./CONSTANTS.js";

export function calculate_gravity(particles) {
    for (let i = 0; i < particles.length; i++) {
        let particle_1 = particles[i]
        particle_1.acceleration.set(0)

        for (let j=0; j <i; j++) {
            let particle_2 =particles[j]
            let distance = particle_1.coordinates.subtraction(particle_2.coordinates)
            let normal = Math.sqrt(100 + distance.length_square())
            let magnitude = UNIVERSAL_GRAVITATIONAL_CONSTANT / (normal * normal * normal)

            particle_1.acceleration.set(particle_1.acceleration.subtraction(distance.multiply(magnitude * particle_2.mass)))
            particle_2.acceleration.set(particle_2.acceleration.addition(distance.multiply(magnitude * particle_1.mass)))
        }
    }
}


export function physics(particles) {
    let total_particles = particles.length
    for (let iteration_1=0; iteration_1<total_particles; iteration_1++) {
        let particle_1 = particles[iteration_1]
        particle_1.coordinates.set(particle_1.coordinates.addition(particle_1.velocity))
    }
    calculate_gravity(particles);
    for (let iteration_2 = 0; iteration_2 < total_particles; iteration_2++) {
        let particle_2 = particles[iteration_2]
        particle_2.velocity.set(particle_2.velocity.addition(particle_2.acceleration))
    }
    for (let iteration_3 = 0; iteration_3 < total_particles; iteration_3++) {
        let particle_3 = particles[iteration_3]
        particle_3.coordinates.set(particle_3.coordinates.addition(particle_3.velocity))
    }

    collisions(particles)

}

export function collisions(particles) {
    for (let i=0; i< particles.length; i++) {
        let particle_1 = particles[i]
        for (let j=0; j < i; j++) {
            let particle_2 = particles[j]

            if (check_collsions(particle_1, particle_2)) {
                resolve_collision(particle_1, particle_2)
            }
        }
    }
}