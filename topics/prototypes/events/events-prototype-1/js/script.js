/**
 * Wake up the monster
 * Leyna Feknous
 * 
 * A sleeping monster reacts when the user moves the mouse
 * The more the mouse moves, the more the monster wakes up
 */

"use strict";

/**
 * Variable of the monster head
*/
let monster ={
    x:250,
    y:250,
    w:400,
    h:320,

    fill: {
        r:200,
        g:200,
        b:10
    }
}
// Variable of the monster eyes
let monsterEye ={
    x:170,
    y:220,
    w:80,
    h:10,

    fill: {
        r:0,
        g:0,
        b:0
    }
}

// Creates the canvas and adds the mouse movement event listener

function setup() {
createCanvas(500,500);

window.addEventListener("mousemove", wakeUpMonster);
}


/**
 * Draws the background and the monster
*/
function draw() {
    background(10,10,80);
    drawMonster();
    drawMonsterLeftEyes();
    drawMonsterRightEyes();
}
// function of the monster head
function drawMonster(){
    push();
    strokeWeight(5);
    fill(monster.fill.r,monster.fill.g,monster.fill.b)
    ellipse(monster.x,monster.y,monster.w,monster.h)
    pop();
}
// function of the monster left eye
function drawMonsterLeftEyes(){
    push();
    noStroke();
    fill(monsterEye.fill.r,monsterEye.fill.g,monsterEye.fill.b)
    ellipse(monsterEye.x,monsterEye.y,monsterEye.w,monsterEye.h)
    pop();
}
// function of the monster right eye
function drawMonsterRightEyes(){
    push();
    noStroke();
    fill(monsterEye.fill.r,monsterEye.fill.g,monsterEye.fill.b)
    ellipse(monsterEye.x+160,monsterEye.y,monsterEye.w,monsterEye.h)
    pop();
}
//  Opens the monster's eyes and changes its color when the mouse moves
function wakeUpMonster(){
    if(monsterEye.h < 100){
        monsterEye.h++
        monster.fill.r++
        monster.fill.g--
        monster.fill.b--
    }
}

