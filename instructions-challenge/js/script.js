/**
 * Title of Project
 * Leyna Feknous
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function setup() {
  createCanvas(400, 300);
  

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  background(255, 204, 0);
  sky();
  sun();
  mountainLeft();
  mountainRight();
  birdBeak();
  tail();
  birdBody();
  tent();
  catBody();
  catFace();
  catLeftEars();
  catRightEars();
  leftPaw();
  rightPaw();
  
  
  
}
function sky() {
  push();
  fill(173, 216, 230);
  noStroke();
  rect(0, 0, 400, 150);
  pop();
}
function mountainLeft(){
  push();
  fill(150, 90, 0);
  noStroke();
  triangle(60, 150, 116, 40, 172, 150);
  pop();
}
function mountainRight(){
  push();
  fill(150, 90, 0);
  noStroke();
  triangle(228, 150, 284, 40, 340, 150);
  pop();
}
function sun(){
  push();
  fill(255, 204, 0);
  noStroke();
  ellipse(310, 65, 100, 100);
  pop();
}
function tail(){
  push();
  fill(100,0,0);
  noStroke();
  triangle(40, 40, 85, 60, 100, 50);
  pop();
}


function birdBody(){
  // Green body of the bird
  push(); 
  fill(100,200,0);
  noStroke();
  ellipse(50, 40, 50, 40);
  pop();

  // Black eye of the bird
  push();
  fill(0,0,0);
  noStroke();
  ellipse(40, 35, 10, 10);
  pop();

  // Wing of the bird
  push();
  fill("red");
  noStroke();
  triangle(45, 40, 60, 50, 70, 40);
  pop();

}
function birdBeak(){
  push();
  fill(200,200,100);
  noStroke();
  triangle(30, 50, 10, 30, 40, 30);
  pop();
}

function tent(){

  // The green tent
  push(); 
  fill("green");
  triangle(180, 280, 265, 120, 350, 280);
  pop();

  // Inside the green tent
  push();
  fill("black");
  triangle(210, 280, 265, 180, 320, 280);
  pop();

  // Rope of the light inside the tent
  push();
  fill("beige")
  noStroke();
  rect(262  , 179, 5 , 30);
  pop();

  // Bulb
  push();
  fill("yellow");
  noStroke();
  ellipse(265, 215, 20, 30);
  pop();
}

function catFace(){
  // Head of the orange cat
  push();
  fill("orange")
  noStroke();
  ellipse(115, 215, 40 , 40);
  pop();


// Left eye of the cat
  push();
  fill("white")
  ellipse(108, 212, 8 , 15);
  pop();

  // Left Iris of the cat
  push();
  fill("black")
  ellipse(108, 215, 7 , 7);
  pop();
  

  // Right eye of the cat
  push();
  fill("white")
  ellipse(122, 212, 8 , 15);
  pop();

  // Right Iris of the cat
  push();
  fill("black")
  ellipse(122, 215, 7 , 7);
  pop();

  // Nose of the cat
  push();
  noStroke();
  fill("red")
  triangle(112, 220, 115, 225, 118, 220);
  pop();

  // Mouth of the cat
  push();
  fill("red");
  noStroke();
  ellipse(115, 230, 15, 8)
  pop();
  
}
function catLeftEars(){
  push();
  fill("orange");
  noStroke();
  triangle(95, 210, 110, 195, 100, 180);
  pop();
  
}

function catRightEars(){
  push();
  fill("orange");
  noStroke();
  triangle(135, 207, 120, 195, 130, 180);
  pop();
  
}
// Body of the cat
function catBody(){
  push();
  noStroke();
  fill("orange")
  ellipse(115, 250, 50 , 60);
  pop();
}

function leftPaw(){
  push();
  noStroke();
  fill("orange")
  ellipse(95, 277, 20 , 10);
  pop();

}
function rightPaw(){
  push();
  noStroke();
  fill("orange")
  ellipse(135, 277, 20 , 10);
  pop();

}