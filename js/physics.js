

export function updateMotion2(objects) {
    let dummyList = {...objects}
    let totalKeys = Object.keys(objects)

    for (let x = 0; x < totalKeys.length; x++) {
        let primary = dummyList[totalKeys[x]]
        for (let y = x+1; y <= totalKeys.length - 1; y++) {
            let secondary = dummyList[totalKeys[y]]
            //common values
            let dx = primary.xaxis - secondary.xaxis
            let dy = primary.yaxis - secondary.yaxis
            let distance = Math.sqrt(dx*dx + dy*dy)
            let angle = Math.atan2(dy, dx)
            let universalGravitationalConstant = 1
            let productOfMass = primary.mass * secondary.mass
            let squareOfDistance = distance*distance
            let gravitationalForce = (universalGravitationalConstant * productOfMass) / squareOfDistance

            // for primary planet
            let acceleration1 = gravitationalForce/primary.mass
            let xacceleration1 =  acceleration1 * Math.cos(angle)
            let yacceleration1 = acceleration1 * Math.sin(angle)
            
            
            objects[totalKeys[x]].acceleration.xaxis += xacceleration1
            objects[totalKeys[x]].acceleration.yaxis += yacceleration1
            
            

            // for secondary planet
            let acceleration2 = gravitationalForce/secondary.mass
            let xacceleration2 =  acceleration2 * Math.cos(angle)
            let yacceleration2 = acceleration2 * Math.sin(angle)
            objects[totalKeys[y]].acceleration.xaxis -= xacceleration2
            objects[totalKeys[y]].acceleration.yaxis -= yacceleration2
            
        }
    }
    return objects

}