/**
 * Up and Down
 * Leyna Feknous
 *
 * A ball that repeatedly move up and down
 */

"use strict";

// Variable of the ball
let ball = {
  x: 250,
  y: 250,
  h: 100,
  w: 100,
  fill: {
    r: 250,
    g: 250,
    b: 50,
  },
  velocity: {
    x: 1,
    y: 0.5,
  },
  acceleration: {
    x: 1,
    y: 0.01,
  },
};

/**
 * Added a canvas
*/
function setup() {
  createCanvas(500, 500);
}
/**
 * Updates the ball's movement and draws it on the canvas
 */
function draw() {
  background(50, 150, 150);

  // Making the ball move by his current speed
  ball.y += ball.velocity.y;

  // Define the limits
  ball.y = constrain(ball.y, 50, 450);

  // Acceleration over time
  ball.velocity.y += ball.acceleration.y;

  // Making the ball bounce if the position of the ball in y is greater or equal than 150 then set
  // the acceleration.y to -0.05
  if (ball.y >= 450) {
    ball.acceleration.y = -0.05;
  }
  // if the position of the ball in y is less or equal than 350 then set the acceleration.y to 0.05
  else if (ball.y <= 350) {
    ball.acceleration.y = 0.05;
  }
  // Draw the ball
  push();
  noStroke();
  fill(ball.fill.r, ball.fill.g, ball.fill.b);
  ellipse(ball.x, ball.y, ball.w, ball.h);
  pop();
}
