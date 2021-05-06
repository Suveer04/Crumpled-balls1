const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var world,engine;
var d1,d2,d3,ground,paper;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  d1 = new Dustbin(890,310,30,130);
  d2 = new Dustbin(1110,310,30,130);
  d3 = new Dustbin(1000,380,250,30);
  paper = new Paper(100,340,60);
  ground = new Ground(600,390,1200,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  d1.display();
  d2.display();
  d3.display();
  paper.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x : 270,y : -140});
  }
}







