/**
 * The Solar System
 * Leyna Feknous
 *
 * A representational prototype of the solar system showing the Sun and the eight planets in order.
 * Each planet is drawn using colors that are similar to its real appearance.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function setup() {
  createCanvas(800, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  background(0, 50, 130);
  sun();
  mercury();
  venus();
  earth();
  mars();
  jupiter();
  saturn();
  uranus();
  neptune();
}

function sun(){
  push();
  fill(200,110,30);
  noStroke();
  ellipse(980, 250, 500, 800);
  pop();
}

function mercury(){
  push();
  fill(200,200,2000);
  noStroke();
  ellipse(670, 250, 50, 50);
  pop();
}

function venus(){
  push();
  fill(250,250,0);
  noStroke();
  ellipse(580, 250, 50, 50);
  pop();
}

function earth(){
  push();
  fill(34, 139, 34);
  noStroke();
  ellipse(490, 250, 50, 50);
  pop();
}

function mars(){
  push();
  fill(150,0,0);
  noStroke();
  ellipse(400, 250, 50, 50);
  pop();
}

function jupiter(){
  push();
  fill(150,100,0);
  noStroke();
  ellipse(310, 250, 50, 50);
  pop();
}

function saturn(){
  push();
  fill(250,250,224);
  noStroke();
  ellipse(220, 250, 50, 50);
  pop();
}
function uranus(){
  push();
  fill(0, 255, 255);
  noStroke();
  ellipse(130, 250, 50, 50);
  pop();
}

function neptune(){
  push();
  fill(4, 2, 115);
  noStroke();
  ellipse(50, 250, 50, 50);
  pop();
}