
function preload() {
    //load the images here
    tomimg=loadImage("cat1.png");
    jerryimg=loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry=createSprite(400,200,20,30);
tom=createSprite(600,300,50,50);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
