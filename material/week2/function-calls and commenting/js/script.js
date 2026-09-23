/**
 * The blank page
 * Leyna
 * 
 * Adding shapes and color to a blank page
 * 
 * The program is non-interactive to convey inability to get started on the project.
 */

"use strict";

/**
 * Creates the canvas for our masterpiece
 */
function setup() {
    // Create the canvas at a standart resolution
    createCanvas(640, 480);
}

/**
 * Draws the writer's desktop and a blank piece of paper
 */
function draw() {
    // The pink desktop
    background(255, 100, 100);
    // The blank piece of paper
    rect(200, 80, 240, 320);
}