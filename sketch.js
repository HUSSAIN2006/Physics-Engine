const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
     var ball_options = {
         restitution: 1
     }
   ball = Bodies.circle(200,200,20,ball_options);
   World.add(world,ball);

   ball1 = Bodies.circle(300,100,20,ball_options);
   World.add(world,ball1)


    console.log(ground);
}

function draw(){
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    fill("magenta")
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    fill("black")
    ellipse(ball.position.x,ball.position.y,20,20)
    ellipse(ball1.position.x,ball1.position.y,20,20)
}
