export function drawPlanet(context, planetSkeleton) {
    context.lineWidth = 5
    context.beginPath();
    context.arc(planetSkeleton.xaxis, planetSkeleton.yaxis, planetSkeleton.radius, planetSkeleton.startingAngle , planetSkeleton.endingAngle)
    context.strokeStyle = 'black'
    context.fillStyle = planetSkeleton.color
    context.fill()
    context.stroke()
}