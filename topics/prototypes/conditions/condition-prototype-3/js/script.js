/**
 * Do not press the button
 * Leyna Feknous
 *
 * A button reacts differently depending on how many times it is pressed.
 * The messages, background, and button behavior change after each click.
 */

"use strict";

/**
 * Variable for the button position, size and color
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
// Count how many times the button has been pressed
let buttonPressed = 0;

// Creates the canva
function setup() {
  createCanvas(500, 500);
}

/**
 * Changes the screen depending on how many times the button is pressed
 */
function draw() {
  // Initial screen
  if (buttonPressed === 0) {
    background(200, 200, 200);
    textSize(20);
    text("Don't press the button", 150, 100);

    // First warning
  } else if (buttonPressed === 1) {
    background(250, 190, 190);
    textSize(25);
    text("I said don't press the button", 100, 100);

    // Third warning, makes the button shake
  } else if (buttonPressed === 2) {
    background(250, 150, 150);
    textSize(40);
    text("Seriously ?", 160, 100);

    // Final warning, dark screen
  } else if (buttonPressed === 3) {
    background(250, 100, 100);
    textSize(60);
    text("YOU BROKE IT !", 20, 100);

    redButton.x += random(-5, 5);
    redButton.x = constrain(redButton.x, 245, 250);
  } else if (buttonPressed === 4) {
    background(0, 0, 0);
    redButton.fill = 0;
  }
  drawRedButton();
}
// Draws the red button
function drawRedButton() {
  push();
  strokeWeight(5);
  fill(redButton.fill.r, redButton.fill.g, redButton.fill.b);
  ellipse(redButton.x, redButton.y, redButton.w, redButton.h);
  pop();
}
// Checks if the button was clicked and increases the click counter
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
