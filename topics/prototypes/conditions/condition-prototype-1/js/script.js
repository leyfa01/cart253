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
let pandaHead ={
    x: 400,
    y: 400,
    w: 450,
    h: 400,

    fill: {
        r: 250,
        g: 250,
        b: 250
    }
}
let pandaRightEars ={
    x: 190,
    y: 250,
    w: 150,
    h: 130,

    fill: {
        r:0,
        g:0,
        b:0
    }


}
let pandaLeftEars ={
    x: 600,
    y: 250,
    w: 150,
    h: 130,

    fill: {
        r:0,
        g:0,
        b:0
    }


}

function setup() {
createCanvas(800,800);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(200,200,200);
drawPandaRightEars();
drawPandaLeftEars()
drawPandaHead();
}


// Panda head
function drawPandaHead(){
push();
strokeWeight(4);
fill(pandaHead.fill.r,pandaHead.fill.g,pandaHead.fill.b);
ellipse(pandaHead.x, pandaHead.y,pandaHead.w,pandaHead.h);
pop();
}

// Panda ears
function drawPandaRightEars(){
push();
fill(pandaRightEars.fill.r,pandaRightEars.fill.g,pandaRightEars.fill.b);
translate(pandaRightEars.x, pandaRightEars.y)
rotate(-19.8);
ellipse(0, 0,pandaRightEars.w,pandaRightEars.h);
pop();
}
function drawPandaLeftEars(){
push();
fill(pandaLeftEars.fill.r,pandaLeftEars.fill.g,pandaLeftEars.fill.b);
translate(pandaLeftEars.x, pandaLeftEars.y)
rotate(35.5);
ellipse(0, 0,pandaLeftEars.w,pandaLeftEars.h);
pop();

}
