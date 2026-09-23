/**
 *  Drawing module - Record of all time
 * 
 * Leyna Feknous
 * 
 * 
 * Practicing and learning drawing functions in p5
 * 
 */

"use strict";


function setup() {
    // Create canva
    createCanvas(640, 640);
    
}

/**
 * Display the record
 */
function draw() {
    // Grey background
    background(150);

    // The main part of the record
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    // The label on the record
    push();
    fill("white");
    ellipse(320, 320, 140, 140);
    pop();

    // The hole on the record
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20, 20);
    pop();

}