const Engine = Matter.Engine; //Laws of Physics
const World = Matter.World;  // applies the laws on to bodies
const Bodies = Matter.Bodies;

var engine, world, box;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var box_options = {
    restitution:.7,
    friction:1,
    density:1.2
  }
  box = Bodies.rectangle(200,100,50,50,box_options);
  World.add(world,box);

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(width/2,390,width,10,options)
  World.add(world,ground);

  //var ball_options = { restitution:.7,friction:1, density:1.0 }
  ball = Bodies.circle(50,50,30,30);
  World.add(world,ball)


}

function draw() {
  background(22,255,255);  
  Engine.update(engine);

  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50);

  rect(ground.position.x,ground.position.y,width,10);
 ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,30,30)



}