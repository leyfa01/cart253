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
let blackHole = {
  x: 250,
  y: 250,
  w: 100,
  h: 100,

  fill: {
    r: 90,
    g: 40,
    b: 90,
  },
  keys:{
        w: 87, 
        a: 65, 
        s: 83, 
        d: 68 
    }
};

function setup() {
  createCanvas(500, 500);
  window.addEventListener("keydown", moveBlackHole)
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  background(10, 90, 200);
  drawBlackHole();
}

function drawBlackHole() {
  push();
  noStroke();
  fill(blackHole.fill.r, blackHole.fill.g, blackHole.fill.b);
  ellipse(blackHole.x, blackHole.y, blackHole.w, blackHole.h);
  pop();
}
function moveBlackHole(){
    if(keyCode===blackHole.keys.w){
        blackHole.y-=5
    }
    if(keyCode===blackHole.keys.a){
        blackHole.x-=5
    }
    if(keyCode===blackHole.keys.s){
        blackHole.y+=5
    }
    if(keyCode===blackHole.keys.d){
        blackHole.x+=5
    }
}