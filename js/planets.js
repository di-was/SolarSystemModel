export const primaryPlanetSkeleton = {
    color: 'blue',
    mass: 6.046e24,
    radius: 6,
    xaxis: window.innerWidth / 2,
    yaxis: window.innerHeight / 2,
    startingAngle: 0,
    endingAngle: 2 * Math.PI,
    counterClockwise: false,
    xacceleration: 0.1,
    yacceleration: 0.1,
}

export function makePlanet(color, mass, radius, xaxis, yaxis) {
    if (color==undefined && mass==undefined && radius==undefined && xaxis==undefined && yaxis==undefined) {
        return {...primaryPlanetSkeleton}
    } else {
        let secondaryPlanetSekelton = {...primaryPlanetSkeleton}

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