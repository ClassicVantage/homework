var drop 
function setup() {
  createCanvas(400,400);
  drop=createSprite(200, 200, 20, 100);
}

function draw() {
  background(255,255,255); 
  fill(purple);
  drop.velocityY=3;
  if(drop.y>400){
    drop.x=0
  }

  drawSprites();
}