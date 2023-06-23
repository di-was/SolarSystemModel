export const primaryPlanetSkeleton = {
    color: 'blue',
    mass: 5,
    radius: 6,
    xaxis: window.innerWidth / 2,
    yaxis: window.innerHeight / 2,
    startingAngle: 0,
    endingAngle: 2 * Math.PI,
    counterClockwise: false,
    velocity: {xaxis: 0, yaxis: 0},
    acceleration: {xaxis: 0, yaxis: 0}
}

export function makePlanet(color, mass, radius, xaxis, yaxis) {
    if (color==undefined && mass==undefined && radius==undefined && xaxis==undefined && yaxis==undefined) {
        return structuredClone(primaryPlanetSkeleton)
    } else {
        let secondaryPlanetSekelton = structuredClone(primaryPlanetSkeleton)
        if (color !== undefined) {
            secondaryPlanetSekelton.color = color
        }
        if (mass !== undefined) {
            secondaryPlanetSekelton.mass = mass
        }
        if (radius !== undefined) {
            secondaryPlanetSekelton.radius = radius
        }
        if (xaxis !== undefined) {
            secondaryPlanetSekelton.xaxis = xaxis
        }
        if (yaxis !== undefined) {
            secondaryPlanetSekelton.yaxis = yaxis
        }
        return secondaryPlanetSekelton
    }
}