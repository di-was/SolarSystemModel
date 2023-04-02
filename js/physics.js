


export function updateMotion(target, objects) {
    let xacceleration = target.acceleration.xaxis
    let yacceleration = target.acceleration.yaxis
    let keysObjects = Object.keys(objects)

    for (let i = 0; i < Object.keys(objects).length; i++) {
        if (target.xaxis !== objects[keysObjects[i]].xaxis && target.yaxis !== objects[keysObjects[i]].yaxis) {
            var dx = target.xaxis - objects[keysObjects[i]].xaxis
            var dy = target.yaxis - objects[keysObjects[i]].yaxis
            var distance = Math.sqrt(dx*dx + dy*dy)
            var angle = Math.atan2(dy, dx)
            const universalGravitationalConstant = 1
            const productOfMass = target.mass * objects[keysObjects[i]].mass
            const squareOfDistance = distance*distance
            const gravitationalForce = (universalGravitationalConstant * productOfMass)/squareOfDistance
            
            var acceleration = gravitationalForce/ target.mass

            xacceleration +=  acceleration * Math.cos(angle)
            yacceleration += acceleration * Math.sin(angle)
            console.log(xacceleration, yacceleration)
         }
    
    return {
        'x' : xacceleration,
        'y' : yacceleration
    }
}
}