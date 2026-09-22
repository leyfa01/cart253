/**
 * Geometric Chaos - Intructions Prototype #2
 * Leyna Feknous
 * 
 * An exploration of geometric with 2D and 3D shapes and using different sizes, colors, layers, and rotations
 * 
 */

"use strict";

/**
 * Created a canva and added WEBGL to display 3D shapes
*/
function setup() {
 createCanvas(500,500, WEBGL);
}


/**
 * Added a pink background and called different functions 
 * to display all the shapes
*/
function draw() {
    background(250,170,180);
    circles();
    rectangles();
    funLine();
    diamond();
    donut();
}

/**
 * Created a 2D circle and 3D sphere
 */
function circles(){
    // 2D cicle
    push();
    // double the weight and the height of the ellipse 
    ellipseMode(RADIUS);
    noStroke();
    fill(70,130,120);
    ellipse(50, 50, 100, 100);
    pop();

    // 3D sphere
    push();
    noStroke();
    // Move the sphere (x,y)
    translate(110,70);
    fill(200,120,150);
    sphere();
    pop();
}
/**
 * Created a 2D rectangle and 3D box
 */
function rectangles(){
    // 2d rectangle
    push();
    rectMode(RADIUS);
    fill(100, 250, 300);
    translate(-100,-100);
    noStroke();
    // rotate the rectangle 
    rotate(2);
    rect(0, 0, 80,80)
    pop();

    // 3D box
    push();
    strokeWeight(0.2);
    colorMode(RGB, 100);
    fill(70, 195, 10);
    translate(-100, -100, 0);
    box();
    // let the user move around and view the 3D shapes from different angles
    // the value changes the sensitivity of the movement
    orbitControl(2, 2, 2);
    pop();
    
}

/**
 * Created a curved line
 */
function funLine(){
    push();
    noFill();
    stroke(125, 120, 200);
    strokeWeight(6);
    bezier(100, -200, -90, -300, 190, 190, -150, 180);
    pop();
}
/**
 * Created a 3D sphere and changed its shape to make it look like a diamond
 */
function diamond(){
    push();
    strokeWeight(0.3);
    // color range 0-100
    colorMode(RGB, 100);
    fill(100, 100, 60);
    translate(120, -120, 10);
    rotate(0.5);
    sphere(50,15,2);
    pop();
}
// Created a 3D torus, changed its color, moved its position, and rotated it
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