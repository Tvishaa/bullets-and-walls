var wall,thickness;
var bullet,speed, weight;

var deformation ;

function setup () {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  car.velocityX = 10;
  wall = createSprite(1200,200,thickness,height/2);
  deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw () {
  background("black");
  drawSprites();
  console.log(deformation);
if(deformation<10){
  car.shapeColor = "green";
}
if(deformation>10){
  car.shapeColor = "red";
}


if (car.x - wall.x < wall.width/2 + car.width/2
  && wall.x - car.x < wall.width/2 + car.width/2 && car.y - wall.y < wall.height/2 + car.height/2
&& wall.y - car.y < wall.height/2 + car.height/2){
  car.velocityX = 0;
}
}