function setup() {
  createCanvas(775, 775)
  background(0, 20)
  angleMode(DEGREES)
  createMysticRose([width/2, height/2], 700, 50)
  // saveCanvas()
  strokeWeight(10)
}

function draw() {
}

function createMysticRose(position, diameter, numberOfPoints) {
  colorMode(RGB)
  fill(255)
  strokeWeight(0.5)
  stroke(102)
  // circle(position[0], position[1], diameter)
  // point(position[0], position[1])

  let radius = diameter/2

  let points = [[position[0] + radius, position[1]]]
  stroke(0)
  point(points[0][0], points[0][1])

  let pointSeparationAngle = 360/numberOfPoints

  let coordinates, polarToCartesianX, polarToCartesianY
  for (let i = 0; i <= 360; i+=pointSeparationAngle) {
    polarToCartesianX = position[0] + radius*cos(i)
    polarToCartesianY = position[1] + radius*sin(i)

    coordinates = [polarToCartesianX, polarToCartesianY]
    points.push(coordinates)
  }

  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1])
  }

  linePopulator(points)
}

function linePopulator(points) {
  _point = points[0]
  points.shift()
  for (let i = 0; i < points.length; i++) {
    stroke(10*i, 10*i, 10*i)
    line(_point[0], _point[1], points[i][0], points[i][1])
  }
  if (points.length > 0) {
    linePopulator(points)
  }
}
