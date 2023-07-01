import { Vector } from "./Vector.js"

export class Planets {
    constructor(coordinates, radius) {
        this.coordinates = coordinates
        this.radius = radius
        this.mass = radius * radius * Math.PI
        this.velocity = new Vector()
        this.acceleration = new Vector()
    }
}
