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
}

function sun(){
  push();
  fill(200,110,30);
  noStroke();
  ellipse(900, 250, 500, 500);
  pop();
}

function mercury(){
  push();
  fill(200,200,2000);
  noStroke();
  ellipse(580, 250, 50, 50);
  pop();
}

function venus(){
  push();
  fill(250,2530,224);
  noStroke();
  ellipse(480, 250, 50, 50);
  pop();
}