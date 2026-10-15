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
  keys: {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
  },
  
};
let keyDown ={
    w: false,
    a: false,
    s: false,
    d: false
  }
let planet = {
  x: 80,
  y: 90,
  w: 80,
  h: 80,
   fill: {
    r: 100,
    g: 200,
    b: 90,
  },
};

function setup() {
  createCanvas(500, 500);
  window.addEventListener("keydown", moveBlackHole);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  background(10, 90, 200);
  drawBlackHole();
  drawPlanet();
  eatPlanet();
}

function drawBlackHole() {
  push();
  noStroke();
  fill(blackHole.fill.r, blackHole.fill.g, blackHole.fill.b);
  ellipse(blackHole.x, blackHole.y, blackHole.w, blackHole.h);
  pop();
}
function drawPlanet() {
  push();
  noStroke();
  fill(planet.fill.r, planet.fill.g, planet.fill.b);
  ellipse(planet.x, planet.y, planet.w, planet.h);
  pop();
}
function moveBlackHole() {
  if (keyCode === blackHole.keys.w) {
    blackHole.y -= 5;
  }
  if (keyCode === blackHole.keys.a) {
    blackHole.x -= 5;
  }
  if (keyCode === blackHole.keys.s) {
    blackHole.y += 5;
  }
  if (keyCode === blackHole.keys.d) {
    blackHole.x += 5;
  }
}
function eatPlanet(){
const distancePlanet = dist(blackHole.x, blackHole.y, planet.x, planet.y);
const planetIsOverlapping = distancePlanet < blackHole.w /2 + planet.w/2;
 if(planetIsOverlapping){
    planet.w = 0;
    planet.h = 0;
    blackHole.w+=5
    blackHole.h+=5
  }
}