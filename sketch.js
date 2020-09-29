var wall, thickness;

var speed, weight, bullet;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  //var height;

  //height = 100;

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  

  if(isTouching(wall,bullet)){
      
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    } 

    if(damage < 10){
      wall.shapeColor = color(0,255,0)
    }


    
    }
    drawSprites();

}

function isTouching(obj1,obj2){
  if(obj2.x - obj1.x <= obj1.width/2 + obj2.width/2 &&
  obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 && 
  obj2.y - obj1.y <= obj1.height/2 + obj2.height/2 &&
  obj1.y - obj2.y <= obj1.height/2 + obj2.height/2){
    return true;
  }

  else{
    return false;
  }
    
   
} 