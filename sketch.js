//Create variables here
var  dog, happyDog, database;
var foodS, foodStock;
var frame;
function preload()
{
  //load images here
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,10,10);
  dog.scale = 0.4
  dog.addImage(dogImg);

  frame = createSprite(250,490,500,10);
  frame.shapeColor = "yellow";
  frame1 = createSprite(250,10,500,10);
  frame1.shapeColor = "yellow";

  frame2 = createSprite(10,250,10,500);
  frame2.shapeColor = "yellow";

  frame3 = createSprite(490,250,10,500);
  frame3.shapeColor = "yellow";

foodStock = database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
   textSize(15);
   strokeWeight(20);
   stroke("purple");
   fill("white");
   text("Press UP_ARROW key  to feed milk ",130,70);

}
function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<= 0 ){
    x = 0;
  }else
  {
    x = x-1;
  }

  database.ref('Food').set({
Food : 'x'
  });
}


