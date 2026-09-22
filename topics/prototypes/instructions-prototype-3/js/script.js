/**
 * Title of Project
 * Leyna feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600,600, WEBGL);
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200);
    sadRobot();
    happyRobot();
    angryRobot();
    
}

function sadRobot(){
    push();
    fill(100);
    orbitControl();
    box(300, 300);
    pop();
    
    // left eye
    push();
    translate(-75,-50,140);
    pointLight(0, 100, 200, 0, 500, 400);
    sphere(40,40,5);
    pop();
    
    // right eye
    push();
    translate(75,-50,140);
    pointLight(0, 100, 200, 0, 500, 400);
    sphere(40,40,5);
    pop();

    // left eye contour
    push();
    fill(0,0,0);
    noStroke();
    translate(-75,-50,150);
    torus(35, 15,)
    pop();

    // right eye contour
    push();
    fill(0,0,0);
    noStroke();
    translate(75,-50,150);
    torus(35, 15,)
    pop();
    
    // mouth
    push();
    translate(0,70,140);
    box(50,50);
    pop();

    // right side of the mouth
    push();
    translate(50,70,140);
    box(50,50);
    pop();

    // left side of the mouth
    push();
    translate(-50,70,140);
    box(50,50);
    pop();

    // right eyebrow
    push();
    translate(80,-120,150);
    rotateZ(0.2);
    fill(0,0,0);
    box(90,20);
    pop();

    // left eyebrow
    push();
    translate(-80,-120,150);
    rotateZ(-0.2);
    fill(0,0,0);
    box(90,20);
    pop();  

    // antenna
    push();
    translate(0,-180,0);
    fill(0,0,0);
    box(30,120,30);
    pop();

    // 
    push();
    fill(100);
    translate(0,-250,0);
    sphere(45,45);
    pop();
}

function happyRobot(){
    
    // left eye
    push();
    translate(-75,-50,-140);
    pointLight(200, 200, 0, 0, -900, -900);
    sphere(40,40,5);
    pop();
    
    // right eye
    push();
    translate(75,-50,-140);
    pointLight(200, 200, 0, 0, -900, -900);
    sphere(40,40,5);
    pop();

    // left eye contour
    push();
    fill(0,0,0);
    noStroke();
    translate(-75,-50,-150);
    torus(35, 15,)
    pop();

    // right eye contour
    push();
    fill(0,0,0);
    noStroke();
    translate(75,-50,-150);
    torus(35, 15,)
    pop();
    
    // mouth
    push();
    translate(0,70,-140);
    box(50,50);
    pop();

    // right side of the mouth
    push();
    translate(50,70,-140);
    
    box(50,50);
    pop();

    // left side of the mouth
    push();
    translate(-50,70,-140);
    box(50,50);
    pop();

    // right eyebrow
    push();
    translate(80,-130,-150);
    fill(0,0,0);
    box(90,20);
    pop();

    // left eyebrow
    push();
    translate(-80,-130,-150);
    fill(0,0,0);
    box(90,20);
    pop();  

}

function angryRobot(){
     
    // left eye
    push();
    translate(-150,-50,-60);
    pointLight(200, 0, 0, -500, 900, -300);
    sphere(40,40,5);
    pop();
    
    // right eye
    push();
    translate(-150,-50,60);
    pointLight(200, 0, 0, -500, 900, 300);
    sphere(40,40,5);
    pop();

    // left eye contour
    push();
    fill(0,0,0);
    translate(-160,-50,-60);
    rotateY(-1.5);
    torus(35, 15,)
    pop();

    // right eye contour
    push();
    fill(0,0,0);
    noStroke();
    translate(-160,-50,60);
    rotateY(1.5);
    torus(35, 15,)
    pop();
    
    // mouth
    push();
    translate(-150,70,0);
    box(50,50);
    pop();

    // right side of the mouth
    push();
    translate(-150,70,50);
    box(50,50);
    pop();

    // left side of the mouth
    push();
    translate(-150,70,-50);
    box(50,50);
    pop();

    // right eyebrow
    push();
    translate(-160,-125,70);
    fill(0,0,0);
    rotateX(-1.3);
    box(20,90,20);
    pop();

    // left eyebrow
    push();
    translate(-160,-125,-70);
    fill(0,0,0);
    rotateX(1.3);
    box(20,90,20);
    pop();  
}