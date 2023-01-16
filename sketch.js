var ball
function setup() {
  createCanvas(700,800);
  ball = createSprite(200, 200, 100, 100)

}

function draw() 
{
  background("blue");
  if (keyDown("right")) {
    ball.x=ball.x+5
  } 
drawSprites()

}





