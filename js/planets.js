import { Vector } from "./Vector.js"
import { PLANET_DENSITY, DEFAULT_PLANET_COLOR, DEFAULT_PLANET_RADIUS } from "./CONSTANTS.js"

export class Planets {
    constructor(coordinates, radius=DEFAULT_PLANET_RADIUS) {
        this.coordinates = coordinates
        this.radius = radius
        this.mass = radius * radius * Math.PI * PLANET_DENSITY
        this.velocity = new Vector()
        this.acceleration = new Vector()
        this.color = DEFAULT_PLANET_COLOR
    }

    check_collision(){}
    resolve_collision(){}
}
