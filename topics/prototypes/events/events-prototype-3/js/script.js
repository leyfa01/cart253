/**
 * Growing Circle
 * Leyna Feknous
 * 
 * A circle grows over time and the player must press SPACE when it matches
 * the size of the target circle
 *
 */

"use strict";
// Variable of the target
let targetCircle ={
    x:250,
    y:250,
    size:400
}
// Variable of the growing circle
let growingCircle ={
    x:250,
    y:250,
    size:10,

    fill:{
        r:150,
        g:150,
        b:150
    },
    // Time between each size 
    delay: 5
}
// Allowed difference between both circles
let offset = 15;
// Message shown after pressing SPACE
let message = "";
// Stores the interval
let growInterval;
/**
 * Creates the canvas, starts the growing interval and adds the keyboard event listener
*/
function setup() {
createCanvas(500,500);
growInterval = setInterval(growCircle, growingCircle.delay);
window.addEventListener("keydown", stopGrowing);
}


/**
 * Draws the circles and result message
*/
function draw() {
    background(200,200,100);
    drawCircle();
    drawGrowingCircle();
    textSize(30);
    text(message,190,35);

}
// Draws the target circle
function drawCircle(){
    push();
    strokeWeight(5);
    noFill();
    ellipse(targetCircle.x,targetCircle.y,targetCircle.size);
    pop();
}
// // Draws the growing circle
function drawGrowingCircle(){
    push();
    noStroke();
    fill(growingCircle.fill.r,growingCircle.fill.g,growingCircle.fill.b);
    ellipse(growingCircle.x,growingCircle.y,growingCircle.size);
    pop();
}

// Increases the size of the growing circle
function growCircle(){
    growingCircle.size++;
}
// Stops the circle from growing when SPACE is pressed and checks the result
function stopGrowing(event){
    if(event.keyCode ===32){
        clearInterval(growInterval);
        result();
    }
}

 // Checks the circle size and gives the player some chance with the offset
 // Displays if it is too small, too big, or close enough to the target
 
function result(){
    if(targetCircle.size<=growingCircle.size + offset && targetCircle.size>=growingCircle.size - offset){
        message = "goodjob"
        console.log("goodjob");
    }
    else if(targetCircle.size>growingCircle.size + offset){
        message = "too small"
        console.log("too small");
    }
    else if(targetCircle.size<growingCircle.size - offset){
        message = "too big"
        console.log("too big");
    }
}