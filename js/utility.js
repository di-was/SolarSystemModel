import { Vector } from "./Vector"

export function check_collsions(planet1, planet2) {
    let distnace = planet1.coordinates.subtraction(planet2.coordinates)
    let sum_of_radius = planet1.radius + planet2.radius
    if (distnace.length_square() < sum_of_radius * sum_of_radius) {  
        return true
    } else {
        return false
    }
}

export function resolve_collision(planet1, planet2) {
    let distance = planet1.coordinates.subtraction(planet2.coordinates)
    distance.set(distance.normalize())

    let velocity = planet2.velocity.subtraction(planet1.velocity)
    let dot = distance.dot(velocity)

    if (dot >= 0) {
        let total_mass = planet1.mass + planet2.mass
        let c = distance.multiply(2 * dot / total_mass)

        planet1.velocity.set(planet1.velocity.addition(c.multiply(planet2.mass)))
        planet2.velocity.set(planet2.veloctiy.subtraction(c.multiply(planet1.mass)))
    }
}

export class mouse {
    constructor(position) {
        position = new Vector()
    }
}
