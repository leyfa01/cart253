/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let targetCircle ={
    x:250,
    y:250,
    size:400
}

let growingCircle ={
    x:250,
    y:250,
    size:10,

    fill:{
        r:150,
        g:150,
        b:150
    },
    delay: 5
}
let offset = 15;
let message = "";
let growInterval;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,500);
growInterval = setInterval(growCircle, growingCircle.delay);
window.addEventListener("keydown", stopGrowing);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200,200,100);
    drawCircle();
    drawGrowingCircle();
    textSize(30);
    text(message,190,35);
    

}

function drawCircle(){
    push();
    strokeWeight(5);
    noFill();
    ellipse(targetCircle.x,targetCircle.y,targetCircle.size);
    pop();
}

function drawGrowingCircle(){
    push();
    noStroke();
    fill(growingCircle.fill.r,growingCircle.fill.g,growingCircle.fill.b);
    ellipse(growingCircle.x,growingCircle.y,growingCircle.size);
    pop();
}
function growCircle(){
    growingCircle.size++;
}

function stopGrowing(event){
    if(event.keyCode ===32){
        clearInterval(growInterval);
        result();
    }
}
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