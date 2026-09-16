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
  mountainLeft();
  mountainRight();
  
  
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

