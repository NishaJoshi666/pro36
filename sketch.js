var dog,dog1,dogimg,doghappy;
var milk,milkImg,milkBottel;
var database;
var foodS;
var foodStock;
var feedButton,foodButton;
var fedTime,lastFed;
var foodObj;

function preload(){

  dogimg = loadImage("images/dogImg.png","images/dogImg1.png");
  milk = loadImage("images/Milk.png");

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  var foodStock = database.ref("Food");
  
  foodStock.on("value",readStock);
  
  dog = createSprite(300,400,40,20);
  dog.addImage("dogSad",dog);
  
  foodObj = new Food(200,190);

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+lastFed%12 + "PM", 350,30);

  }
  else if(lastFed==0){
    text("Last Feed : 12 AM",350,30);

  }
  else{
    text("Last Feed : "+lastFed + "AM",350,30);
  }

}


function draw() {  
  background(46,139,87);
text("Note:PRESS 'UP_ARROW' KEY TO FEED DRAGO MILK!");
   
  drawSprites();
  //add styles here
  textSize(30);
  fill("white");
  Stroke(4);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }

  database.ref('/').update({
    Food : x
  });
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}