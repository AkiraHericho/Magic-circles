var fr = 1;
var ellipseLocationX;
var ellipseLocationY;
function setup(){
createCanvas(1920,1080);
noStroke();
frameRate(fr);
}
function draw(){
largeCircle();
smallCircle();
mediumCircle();
}
function smallCircle(){
fr = 30;
ellipseLocationX = random(1920)
ellipseLocationY = random(1080)
  fill(random(255),random(255),random(255),random(255));
  ellipse(ellipseLocationX,ellipseLocationY,random(50));

  fill(random(100, 255),random(100, 255),random(100, 255),random(255));
ellipse(ellipseLocationX,ellipseLocationY,random(55,100));

}

function mediumCircle(){
fr = 60;
ellipseLocationX = random(1920)
ellipseLocationY = random(1080)
  fill(random(255),random(255),random(255),random(255));
  ellipse(ellipseLocationX,ellipseLocationY,random(120,200));

  fill(random(100, 255),random(100, 255),random(100, 255),random(255));
ellipse(ellipseLocationX,ellipseLocationY,random(220,300));

}
function largeCircle(){
  fr = 1;
  ellipseLocationX = random(1920)
  ellipseLocationY = random(1080)
    fill(random(255),random(255),random(255),random(255));
    ellipse(ellipseLocationX,ellipseLocationY,random(320,400));

    fill(random(100, 255),random(100, 255),random(100, 255),random(255));
  ellipse(ellipseLocationX,ellipseLocationY,random(420,500));
}
