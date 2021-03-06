const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;
var sand1, sand2, sand3, sand4,sand5,sand6;

function preload()
{
    
}

function setup() {
    var canvas = createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;

   plane = new Plane(600,height,1200,20);
   stone1=createSprite(500,250,100,100);
   stone = new Stone(700,320,100,100);
   iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(300,100);

  sand1 = new Sand(505,450,10);
    sand2 = new Sand(525,450,10);
    sand3 = new Sand(545,450,10);
    sand4 = new Sand(565,450,10);
    sand5 = new Sand(585,450,10);
    sand6 = new Sand(605,450,10);
    sand7 = new Sand(625,450,10);
    sand8 = new Sand(655,450,10);
    sand9 = new Sand(575,450,10);
    sand10 = new Sand(595,450,10); 

  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  world = engine.world;
  background(0);
  plane.display();
  stone.display();
  iron.display();
  rubber.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
 
}