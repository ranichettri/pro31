const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
//divisions
for (var k = 0; k <=width; k = k + 80){
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}
//plinkos
for(var j = 40; j <=width; j = j+50){
  plinkos.push(new Plinko(j,75));
}
for(var j = 15; j <=width-10; j = j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j = 40; j <=width; j = j+50){
  plinkos.push(new Plinko(j,275));
}
for(var j = 15; j <=width-10; j = j+50){
  plinkos.push(new Plinko(j,375));
}
//ground
  ground = new Ground(240,height,480,20);  
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  //displaying particles 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k <  particles.length; k++){
    particles[k].display();
  }
  
  //displaying divisions
  for (var j = 0; j < divisions.length; j++){
    divisions[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  
  //displaying plinkos
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }
  
  
  drawSprites();
}