/**
 * Title of Project
 * Leyna Feknous
 *
 * A flashlight follows the mouse and reveals the hidden red circle when it gets close. 
 * Good luck in finding the red circle, it's VERY VERY hard ! :)
 */

"use strict";

// Variable for the flashlight
let flashlight = {
  w: 100,
  h: 100,
  fill: {
    r: 250,
    g: 200,
    b: 50,
  },
};

// Variable for the red circle
let redCircle = {
  x: 250,
  y: 250,
  w: 100,
  h: 100,
};

// Set the amount of the color red 
let value = 0;

/**
 * Added a canvas
 */
function setup() {
  createCanvas(500, 500);
}

/**
 * Draw the background, the flashlight and redCircle and call the function mouseMoved();
 */
function draw() {
  background(0, 0, 0);
  mouseMoved();

  // Draw the flashlight
  push();
  fill(flashlight.fill.r, flashlight.fill.g, flashlight.fill.b, 50);
  ellipse(mouseX, mouseY, flashlight.w, flashlight.h);
  pop();

  // Draw the redCircle
  push();
  noStroke();
  // The value will control the amount of the color red
  fill(value,0,0);
  ellipse(redCircle.x, redCircle.y, redCircle.w, redCircle.h);
  pop();


}
// Create the function that work when the user moves the mouse
function mouseMoved() {
    
    // Check if the mouse is near the red Circle
  if (
    mouseX >= redCircle.x - redCircle.w / 2 - 10 &&
    mouseX <= redCircle.x + redCircle.w / 2 + 10 &&
    mouseY >= redCircle.y - redCircle.h / 2 - 10 &&
    mouseY <= redCircle.y + redCircle.h / 2 + 10
  ) {
    // Increase the red color overtime
    value += 0.6;
  }
  else{
    // Force the value to stay in 0 if it goes below (When the mouse is not near the red Circle)
    if( value <= 0 ){
    value = 0;
    }
    else{
        // Decrease the red color overtime if the mouse is not near of the red Circle 
    value -=0.6;
    }
  }
}
