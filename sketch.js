var ball = {
  x : 20 ,
  y : 25 ,
  r : 20 ,
  xspeed : 0 ,
  yspeed : 0 ,
  colour : ['black','skyblue','green']
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (ball.colour[1])
  circle (ball.x,ball.y,ball.r)
  ball.xspeed = 1
  ball.x = ball.x + ball.xspeed
}
