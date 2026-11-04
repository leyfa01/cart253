/**
 * Lines
 * Leyna Feknous
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */


function draw() {
    background("pink");

  let x = 0;
  let strokeShade = 0;
  let weightX = 1;
  
    // Vertical lines that get lighter and thicker
    while (x <= width) {
    push();
    stroke(strokeShade);
    strokeWeight(weightX);
    line(x, 0, x, height);
    pop();
    
    x += 50;
    strokeShade += 25;
    weightX += 1;
  }
}