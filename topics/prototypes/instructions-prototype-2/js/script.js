/**
 * Title of Project
 * Leyna Feknous
 * 
 * An exploration of geometric shapes using different sizes, colors, layers, and rotations
 * 
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
    funLine();
    diamond();
    donut();
}

function circles(){
    push();
    ellipseMode(RADIUS);
    noStroke();
    fill(70,130,120);
    ellipse(50, 50, 100, 100);
    pop();

    push();
    noStroke();
    translate(110,70);
    fill(200,120,150);
    sphere();
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
    strokeWeight(0.2);
    colorMode(RGB, 100);
    fill(70, 195, 10);
    translate(-100, -100, 0);
    box();
    orbitControl(2, 2, 2);
    pop();
    
}

function funLine(){
    push();
    noFill();
    stroke(125, 120, 200);
    strokeWeight(6);
    bezier(100, -200, -90, -300, 190, 190, -150, 180);
    pop();
}
function diamond(){
    push();
    strokeWeight(0.3);
    colorMode(RGB, 100);
    fill(100, 100, 60);
    translate(120, -120, 10);
    rotate(0.5);
    sphere(50,15,2);
    pop();
}
function donut(){
    push();
    colorMode(RGB, 200);
    fill(50, 100,180);
    noStroke();
    translate(-120, 70, 10);
    rotateY(120);
    rotateX(150);
    torus();
    pop();
}