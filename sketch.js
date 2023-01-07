const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,380,400,30);
  right = new Ground(380,200,30,400);
  left = new Ground(20,200,30,400);
  top_wall = new Ground(200,20,400,30);
  var options ={
    restitution:0.9
  }
  ball=Bodies.circle(200, 20, 20, options)
  rectMode(CENTER);
  World.add(world,ball)
  ellipseMode(RADIUS);

  button1=createImg("right.png")
  button1.position(30,50)
  button1.size(50,50)
  button1.mouseClicked(hforce)

  button2=createImg("up.png")
  button2.position(300,150)
  button2.size(50,50)
  button2.mouseClicked(vforce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  
  ellipse(ball.position.x, ball.position.y, 20, 20)
}

function hforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.03,y:0})
}

function vforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.03})
}
