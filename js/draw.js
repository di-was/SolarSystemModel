export function drawPlanet(context, planet) {
    context.lineWidth = 1
    context.beginPath();
    context.arc(planet.coordinates.x, planet.coordinates.y, planet.radius, 0 , Math.PI * 2)
    context.strokeStyle = 'black'
    context.fillStyle = planet.color
    context.fill()
    context.stroke()
}