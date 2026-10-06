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
let redButton = {
  x: 250,
  y: 250,
  w: 220,
  h: 200,

  fill: {
    r: 200,
    g: 50,
    b: 50,
  },
 
};
let buttonPressed = 0;
function setup() {
  createCanvas(500, 500);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  if (buttonPressed === 0) {
    background(200, 200, 200);
    textSize(20);
    text("Don't press the button", 150, 100);
  } else if (buttonPressed === 1) {
    background(250, 190, 190);
    textSize(25);
    text("I said don't press the button", 100, 100);
  } else if (buttonPressed === 2) {
    background(250, 150, 150);
    textSize(40);
    text("Seriously ?", 160, 100);
  } else if (buttonPressed === 3) {
    background(250, 100, 100);
    textSize(60);
    text("YOU BROKE IT !", 20, 100);

    redButton.x += random(-5, 5);
    redButton.x = constrain(redButton.x, 245, 250);

  } else if (buttonPressed === 4) {
    background(0, 0, 0);
    ((redButton.fill = 0), 0, 0);
  }
  drawRedButton();
}
function drawRedButton() {
  push();
  strokeWeight(5);
  fill(redButton.fill.r, redButton.fill.g, redButton.fill.b);
  ellipse(redButton.x, redButton.y, redButton.w, redButton.h);
  pop();
}
function mouseClicked() {
  if (
    mouseX >= redButton.x - redButton.w / 2 &&
    mouseX <= redButton.x + redButton.w / 2 &&
    mouseY >= redButton.y - redButton.h / 2 &&
    mouseY <= redButton.y + redButton.h / 2
  ) {
    buttonPressed++;
  }
}
