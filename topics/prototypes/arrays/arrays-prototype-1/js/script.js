/**
 * Flowers
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let flowers  = [];


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background("#a8e6a1");

}

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