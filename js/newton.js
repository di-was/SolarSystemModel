function newtonForce(planetSkeleton1, planetSkeleton2) {
    const gravitationalConstant = 6.67e-11
    let productOFMass = planetSkeleton1.mass * planetSkeleton2.mass
    let distance = ((planetSkeleton2.xaxis - planetSkeleton1.xaxis)**2 + (planetSkeleton2.yaxis - planetSkeleton2.yaxis)**2)**0.5
    let force = (gravitationalConstant*productOFMass)/distance**2
    return force
}