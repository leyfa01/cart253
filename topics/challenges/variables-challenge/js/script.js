/**
 * Mr. Furious
 * Leyna Feknous
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
};

let sky = {
  fill: {
    r: 160,
    g: 180,
    b: 200,
  },
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  // Setting the background color with variables
  background(sky.fill.r, sky.fill.g, sky.fill.b);

  // Changing the color of the sky overtime so it will be black --> fill(0,0,0);
  sky.fill.r -= 1;
  sky.fill.g -= 1;
  sky.fill.b -= 1;


  // Changing the color of mrFurious overtime 
  mrFurious.fill.g -= 1;
  mrFurious.fill.b -= 1;

  // Keep the value of the green and blue between 0 and 200
  mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 200);
  mrFurious.fill.b = constrain(mrFurious.fill.b, 0, 200);
  console.log(mrFurious.fill.g, mrFurious.fill.b);

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}
