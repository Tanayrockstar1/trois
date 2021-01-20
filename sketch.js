function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  player.shapeColor = "yellow"
  ground = createSprite(410,250,50,50);
  ground.shapeColor = "Blue"
}

function draw() {
  background(255,255,255);
  ground.x = mouseX
  ground.y = mouseY
  
  if(ground.x - player.x < player.width/2 + ground.width/2
    && player.x - ground.x < player.width/2 + ground.width/2
    &&ground.y - player.y < player.height/2 + ground.height/2
    &&player.y - ground.y < player.height/2 + ground.height/2){
      ground.shapeColor = "red"
      player.shapeColor = "green"
    }
    else{
      ground.shapeColor = "Blue"
      player.shapeColor = "yellow"
    }
  drawSprites();
}