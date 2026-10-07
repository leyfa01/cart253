/**
 * Introducting events
 * Leyna Feknous
 * 
 * How events work in JS and p5
 */

"use strict";

/**
 * Creates canvas
*/
function setup() {
    createCanvas(400,400);
    background(0);
}


/**
 * Does nothing
*/
function draw() {

}
// Draws a circle at the mouse location
function mousePressed(){
    push();
    noStroke();
    fill(255,255,0);
    ellipse(mouseX,mouseYm,50);
    pop();
}