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
let monsterEye ={
    x:170,
    y:220,
    w:80,
    h:10,

    fill: {
        r:300,
        g:300,
        b:300
    }
}
function setup() {
createCanvas(500,500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(10,100,140);
    drawMonster();
    drawMonsterLeftEyes();
    drawMonsterRightEyes();
}

function drawMonster(){
    push();
    strokeWeight(5);
    fill(monster.fill.r,monster.fill.g,monster.fill.b)
    ellipse(monster.x,monster.y,monster.w,monster.h)
    pop();
}
function drawMonsterLeftEyes(){
    push();
    noStroke();
    fill(monsterEye.fill.r,monsterEye.fill.g,monsterEye.fill.b)
    ellipse(monsterEye.x,monsterEye.y,monsterEye.w,monsterEye.h)
    pop();
}
function drawMonsterRightEyes(){
    push();
    noStroke();
    fill(monsterEye.fill.r,monsterEye.fill.g,monsterEye.fill.b)
    ellipse(monsterEye.x+160,monsterEye.y,monsterEye.w,monsterEye.h)
    pop();
}

