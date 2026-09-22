/**
 * Mood Bot - instruction- prototype 3
 * Leyna feknous
 * 
 * A robot created with 3D shapes to explore different emotions. 
 * Each face uses changes in the eyes, eyebrows, mouth, colors, and rotations to represent expressions 
 * like happy, sad, neutral, and angry.
 */

"use strict";

/**
 * Created a canva and added WEBGL to display 3D shapes
*/
function setup() {
    createCanvas(600,600, WEBGL);
    
}


/**
 *  Added a grey background and called different functions to display all the robot faces.
*/
function draw() {
    background(200);
    sadRobot();
    neutralRobot();
    angryRobot();
    happyRobot();
    
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

function neutralRobot(){
    
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

function happyRobot(){  
    // left eye
    push();
    translate(150,-50,-60);
    pointLight(0, 200, 0, 400,0, 0);
    sphere(40,40,5);
    pop();
    
    // right eye
    push();
    translate(150,-50,60);
    pointLight(0, 200, 0, 400,0, 0);
    sphere(40,40,5);
    pop();

    // left eye contour
    push();
    fill(0,0,0);
    translate(160,-50,-60);
    rotateY(-1.5);
    torus(35, 15,)
    pop();

    // right eye contour
    push();
    fill(0,0,0);
    noStroke();
    translate(160,-50,60);
    rotateY(1.5);
    torus(35, 15,)
    pop();
    
    // mouth
    push();
    translate(150,70,0);
    box(50,50);
    pop();

    // right side of the mouth
    push();
    translate(150,70,50);
    box(50,50);
    pop();

    // left side of the mouth
    push();
    translate(150,70,-50);
    box(50,50);
    pop();

    // right eyebrow
    push();
    translate(140,-90,-70);
    fill(0,0,0);
    rotateX(1.6);
    rotateY(5);
    torus(50,5);
    pop();

    // left eyebrow
    push();
    translate(140,-90,70);
    fill(0,0,0);
    rotateX(1.6);
    rotateY(5);
    torus(50,5);
    pop();  

}