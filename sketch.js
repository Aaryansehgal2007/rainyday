const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 500;
var umbrella;
var rand;
var night;
var Thunder, thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;


function preload(){
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");
   thunder3 = loadImage("3.png");
   thunder4 = loadImage("4.png");
}

function setup(){
   var canvas = createCanvas(400, 700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++){
      drops.push(new createDrops(random(0,500), random(0,500)));
   }
}

function draw(){
   Engine.update(engine);
   background(25,1,54); 

    
    rand = Math.round(random(1,4));
    if(frameCount%50 === 0){
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break; 
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;
    }
        Thunder.scale = random(0.6,0.3,0.7,0.9,0.8,1,0.5,0.4,0.2,0.1,0);
    }
    if(thunderCreatedFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }

   for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
  }
  umbrella.display();

   drawSprites();
} 