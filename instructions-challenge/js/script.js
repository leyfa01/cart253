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
  push();
  fill("green");
  triangle(60, 150, 116, 40, 172, 150);
  pop();
}