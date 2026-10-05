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
let pandaRightEar ={
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
let pandaLeftEar ={
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

let pandaLeftEye ={
    x: 510,
    y: 380,
    w: 150,
    h: 130,

    fill: {
        r:0,
        g:0,
        b:0
    }
}
let pandaRightEye ={
    x: 300,
    y: 380,
    w: 150,
    h: 130,

    fill: {
        r:0,
        g:0,
        b:0
    }
}

let pandaRightIris ={
    x: 310,
    y: 380,
    w: 40,
    h: 40,

    fill: {
        r:250,
        g:250,
        b:250
    }
}
let pandaLeftIris ={
    x: 500,
    y: 380,
    w: 40,
    h: 40,

    fill: {
        r:250,
        g:250,
        b:250
    }
}

let pandaNose ={
    x: 400,
    y: 460,
    w: 50,
    h: 40,

    fill: {
        r:0,
        g:0,
        b:0
    }
}
let bamboo ={
    w: 130,
    h: 20,

    fill: {
        r:150,
        g:180,
        b:100
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
drawPandaRightEar();
drawPandaLeftEar();
drawPandaHead();
drawPandaLeftEye();
drawPandaRightEye();
drawPandaRightIris();
drawPandaLeftIris();
drawPandaNose();
drawPandaLeftMouth();
drawPandaRightMouth();
food();

}


//////// Panda Head //////////
function drawPandaHead(){
push();
strokeWeight(4);
fill(pandaHead.fill.r,pandaHead.fill.g,pandaHead.fill.b);
ellipse(pandaHead.x, pandaHead.y,pandaHead.w,pandaHead.h);
pop();
}

//////// Panda Ears //////////
function drawPandaRightEar(){
push();
fill(pandaRightEar.fill.r,pandaRightEar.fill.g,pandaRightEar.fill.b);
translate(pandaRightEar.x, pandaRightEar.y)
rotate(-19.8);
ellipse(0, 0,pandaRightEar.w,pandaRightEar.h);
pop();
}
function drawPandaLeftEar(){
push();
fill(pandaLeftEar.fill.r,pandaLeftEar.fill.g,pandaLeftEar.fill.b);
translate(pandaLeftEar.x, pandaLeftEar.y)
rotate(35.5);
ellipse(0, 0,pandaLeftEar.w,pandaLeftEar.h);
pop();
}
//////// Panda Eyes //////////
function drawPandaLeftEye(){
push();
fill(pandaLeftEye.fill.r,pandaLeftEye.fill.g,pandaLeftEye.fill.b);
translate(pandaLeftEye.x, pandaLeftEye.y)
rotate(35.5);
ellipse(0, 0,pandaLeftEye.w,pandaLeftEye.h);
pop();
}

function drawPandaRightEye(){
push();
fill(pandaRightEye.fill.r,pandaRightEye.fill.g,pandaRightEye.fill.b);
translate(pandaRightEye.x, pandaRightEye.y)
rotate(-19.9);
ellipse(0, 0,pandaRightEye.w,pandaRightEye.h);
pop();
}
//////// Panda Iris //////////
function drawPandaLeftIris(){
push();
fill(pandaLeftIris.fill.r,pandaLeftIris.fill.g,pandaLeftIris.fill.b);
translate(pandaLeftIris.x, pandaLeftIris.y)
rotate(35.5);
ellipse(0, 0,pandaLeftIris.w,pandaLeftIris.h);
pop();
}

function drawPandaRightIris(){
push();
fill(pandaRightIris.fill.r,pandaRightIris.fill.g,pandaRightIris.fill.b);
translate(pandaRightIris.x, pandaRightIris.y)
rotate(-19.9);
ellipse(0, 0,pandaRightIris.w,pandaRightIris.h);
pop();
}

//////// Panda Nose //////////
function drawPandaNose(){
push();
fill(pandaNose.fill.r,pandaNose.fill.g,pandaNose.fill.b);
translate(pandaNose.x, pandaNose.y)
ellipse(0, 0,pandaNose.w,pandaNose.h);
pop();
}

//////// Panda Mouth //////////
function drawPandaLeftMouth(){
push();
noFill();
strokeWeight(8);
bezier( 400, 480,385, 510,345, 520,325, 480);
pop();
}
function drawPandaRightMouth(){
push();
noFill();
strokeWeight(8);
bezier(400, 480,415, 510,455, 520,475, 480);
pop();
}
//////// Bamboo //////////
function food(){
push();
fill(bamboo.fill.r,bamboo.fill.g,bamboo.fill.b);
rect(mouseX, mouseY, bamboo.w, bamboo.h)
pop();
}
