/**
 * Fruit Parade
 * Leyna Feknous
 * 
 * Click to see the next fruit. Each fruit is an object
 * in an array with its own name, shape and colors.
 */

"use strict";

// Every fruit with its name, colors and shape size
let fruits = [
    { name: "Strawberry", color: "#e63946", background: "#ffe5ec", width: 120, height: 140 },
    { name: "Banana", color: "#ffd60a", background: "#3a86ff", width: 250, height: 70 },
    { name: "Kiwi", color: "#7cb518", background: "#5c4033", width: 140, height: 120 },
    { name: "Orange", color: "#fb8500", background: "#023047", width: 160, height: 160 },
    { name: "Grape", color: "#7b2cbf", background: "#c7f9cc", width: 80, height: 80 }
]

// Position of the fruit currently shown in the array
let currentIndex = 0;

/**
 * Creates canvas
*/
function setup() {
    createCanvas(600,600);
}


/**
 * Draws the current fruit with its background, shape and name
*/
function draw() {
    // Get the fruit at the current position in the array
    let fruit = fruits[currentIndex];

    // Background
    background(fruit.background);

    // Fruit shape
    push();
    noStroke();
    fill(fruit.color);
    ellipse(width / 2, height / 2, fruit.width, fruit.height);
    pop();

    // Fruit name
    push();
    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text(fruit.name, width / 2, height - 100);
    pop();
}

// Moves to the next fruit in the array, and goes back to the first one after the last
function mousePressed() {
    currentIndex = currentIndex + 1;

    // If we went past the last fruit, start again at the first one
    if (currentIndex >= fruits.length) {
        currentIndex = 0;
    }
}