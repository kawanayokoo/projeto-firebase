var ball;
var dtb;
var position;


function setup(){
  dtb = firebase.database();
  
  createCanvas(500,500);
  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";
  var bolaPosition = dtb.ref("bola/position");
  bolaPosition.on("value",readPosition);


  
  

}

function draw(){
  background("white");
  
  //x,y
  if(position !== undefined )
  {
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
  }
    drawSprites();
  
}

function writePosition(x,y){
  dtb.ref("bola/position").set({
    "x":position.x + x,
    "y":position.y + y
  })
}

function readPosition(data){
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;
}