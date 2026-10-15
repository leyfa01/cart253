/**
 * Black hole
 * Leyna Feknous
 *
 * 
 * When the black hole touches the planet, the planet moves to a new random position, change to a random color
 * and the black hole grows. Control the black hole with the WASD keys
 */

"use strict";

/**
 * Variable of the Black hole
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
//   WASD key codes
  keys: {
    w: 87, 
    a: 65,
    s: 83,
    d: 68,
  },
  
};
// Variable of the planet
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
//  Creates the canvas and adds the keyboard event listener
function setup() {
  createCanvas(500, 500);
  window.addEventListener("keydown", moveBlackHole);
}

/**
 * Draws the background, black hole, and planet and checks if the black hole eats the planet
 */
function draw() {
  background(10, 90, 200);
  drawBlackHole();
  drawPlanet();
  eatPlanet();
}
// Draws the black hole
function drawBlackHole() {
  push();
  noStroke();
  fill(blackHole.fill.r, blackHole.fill.g, blackHole.fill.b);
  ellipse(blackHole.x, blackHole.y, blackHole.w, blackHole.h);
  pop();
}
// Draws the planet
function drawPlanet() {
  push();
  noStroke();
  fill(planet.fill.r, planet.fill.g, planet.fill.b);
  ellipse(planet.x, planet.y, planet.w, planet.h);
  pop();
}
// Moves the black hole using the WASD keys
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
// Checks if the black hole touches the planet
function eatPlanet(){

const distancePlanet = dist(blackHole.x, blackHole.y, planet.x, planet.y);

const planetIsOverlapping = distancePlanet < blackHole.w /2 + planet.w/2;
// If they overlap the planet moves to a random position,
// change to a random color and the black hole becomes bigger
 if(planetIsOverlapping){
    planet.y = random(50,450);
    planet.x = random(50,450);
    planet.fill.r = random(0,250);
    planet.fill.g = random(0,250);
    planet.fill.b = random(0,250);
    blackHole.w+=5
    blackHole.h+=5

  }
}