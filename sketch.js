var database;

var gamestate=0
var playercount
var form,player,game

function setup(){
  database = firebase.database();
    createCanvas(500,500);

game=new Game();
game.getstate();
game.start();


 /* hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);*/
}

function draw(){
 
  
}

/*function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}*/

function showError(){
  console.log("Error in writing to the database");
}
