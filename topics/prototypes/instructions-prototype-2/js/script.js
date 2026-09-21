/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
 createCanvas(500,500, WEBGL);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(250,170,180);
    circles();
    rectangles();
}

function circles(){
    push();
    ellipseMode(RADIUS);
    noStroke();
    fill(70,130,120);
    ellipse(50, 50, 100, 100);
    pop();

    push();
    ellipseMode(CORNER);
    noStroke();
    fill(300);
    ellipse(50, 50, 100, 100);
    pop();
}

function rectangles(){
    push();
    rectMode(RADIUS);
    fill(100, 250, 300);
    translate(-100,-100);
    noStroke();
    rotateZ(2);
    rect(0, 0, 80,80)
    pop();

    push();
    rectMode(CENTER);
    fill(200, 250, 0);
    translate(-100,-100);
    noStroke();
    rotateZ(1);
    rect(0, 0, 70,70);
    
    pop();
}