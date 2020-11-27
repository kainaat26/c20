var fixedrect,movingrect;


function setup() {
  createCanvas(400,400);
 fixedrect = createSprite(200,200,60,50);
 fixedrect.shapeColor = ("green");

 movingrect = createSprite(50,50,40,70);
movingrect.shapeColor = ("green");

fixedrect.debug = true;
movingrect.debug = true;
}

function draw() {
  background("black"); 

  movingrect.x = mouseX;
  movingrect.y = mouseY;
  
  if(fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
    movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 ){
    fixedrect.shapeColor = ("red");
    movingrect.shapeColor = ("red");
  }
  else{
    fixedrect.shapeColor = ("green");
    movingrect.shapeColor = ("green");
  }

  drawSprites();
 
}