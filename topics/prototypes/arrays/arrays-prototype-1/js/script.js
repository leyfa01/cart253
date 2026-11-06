/**
 * Plant & Bloom
 * Leyna Feknous
 * 
 * Click anywhere to plant a flower. Each flower is stored
 * in an array and has a random color and size.
 */

"use strict";

// Array that stores every flower created by a click
let flowers  = [];


/**
 * Creates the canvas
*/
function setup() {
    createCanvas(600,600);
}


/**
 * Draws the grass background and all the flowers in the array
*/
function draw() {
background("#a8e6a1");

// Go through every flower and draw it
for (let flower of flowers){
    drawFlower(flower);
}

}

// Draws one flower with a green stem and a colored head

function drawFlower(flower){
    // Stem
    push();
    stroke("#2d6a4f");
    strokeWeight(4);
    line(flower.x, flower.y, flower.x, flower.y + flower.maxSize /1);
    pop();

    // Head
    push();
    noStroke();
    fill(flower.petalColor);
    ellipse(flower.x, flower.y, flower.maxSize);
    pop();

}

// Creates a new flower at the mouse position and adds it to the flowers array

function mousePressed(){
    let flower ={
    x: mouseX,
    y: mouseY,
    size: 1,
    maxSize: random(30,70),
    growthSpeed: random(0.5,2),
    petalColor: color(random(255), random(255), random(255))
};
flowers.push(flower);
}