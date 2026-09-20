/**
 * The Solar System
 * Leyna Feknous
 *
 * A representational prototype of the solar system showing the Sun and the eight planets in order.
 * Each planet is drawn using colors that are similar to its real appearance.
 */

"use strict";

/**
 * Creates the canvas where the solar system will be drawn
 */
function setup() {
  createCanvas(900, 500);
}


/**
 *Draws the space background and calls each function to display
 *the Sun and the eight planets
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
/**
 * Draws the Sun on the right side of the canvas
 */
function sun(){
  push();
  fill(200,110,30);
  noStroke();
  ellipse(1050, 250, 500, 700);
  pop();
}

function mercury(){
  push();
  fill(200,200,2000);
  noStroke();
  ellipse(765, 250, 20, 20);
  pop();
}

function venus(){
  push();
  fill(250,250,0);
  noStroke();
  ellipse(700, 250, 60, 60);
  pop();
}

function earth(){
  push();
  fill(34, 139, 34);
  noStroke();
  ellipse(610, 250, 70, 70);
  pop();
}

function mars(){
  push();
  fill(150,0,0);
  noStroke();
  ellipse(530, 250, 50, 50);
  pop();
}

function jupiter(){
  push();
  fill(150,100,0);
  noStroke();
  ellipse(430, 250, 100, 100);
  pop();
}

function saturn(){
  //  Saturn's ring
  push();
  noFill();
  stroke(230, 220, 160);
  strokeWeight(4);
  ellipse(290, 250, 150, 30)
  pop();

  // Saturn
  push();
  fill(250,250,224);
  noStroke();
  ellipse(290, 250, 90, 90);
  pop();
}
function uranus(){
  push();
  fill(0, 255, 255);
  noStroke();
  ellipse(160, 250, 80, 80);
  pop();
}

function neptune(){
  push();
  fill(4, 2, 115);
  noStroke();
  ellipse(60, 250, 80, 80);
  pop();
}