/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let fruits = [
    { name: "Strawberry", color: "#e63946", background: "#ffe5ec", width: 120, height: 140 },
    { name: "Banana", color: "#ffd60a", background: "#3a86ff", width: 250, height: 70 },
    { name: "Kiwi", color: "#7cb518", background: "#5c4033", width: 140, height: 120 },
    { name: "Orange", color: "#fb8500", background: "#023047", width: 160, height: 160 },
    { name: "Grape", color: "#7b2cbf", background: "#c7f9cc", width: 80, height: 80 }
]

let currentIndex = 0;
/**
 * Creates canvas
*/
function setup() {
    createCanvas(600,600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    let fruit = fruits[currentIndex];

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

function mousePressed() {
    currentIndex = currentIndex + 1;

    // If we went past the last fruit, start again at the first one
    if (currentIndex >= fruits.length) {
        currentIndex = 0;
    }
}