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
let firstDoor = {
  x: 100,
  y: 150,
  w: 200,
  h: 300,

  fill: {
    r: 200,
    g: 100,
    b: 100,
  },
};
let secondDoor = {
  x: 400,
  y: 150,
  w: 200,
  h: 300,

  fill: {
    r: 100,
    g: 250,
    b: 150,
  },
};
let thirdDoor = {
  x: 700,
  y: 150,
  w: 200,
  h: 300,

  fill: {
    r: 100,
    g: 150,
    b: 250,
  },
};

function setup() {
  createCanvas(1000, 700);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  background(200, 200, 200);

  drawFirstDoor();
  drawSecondDoor();
  drawThirdDoor();
}

function drawFirstDoor() {
  push();
  fill(firstDoor.fill.r, firstDoor.fill.g, firstDoor.fill.b);
  stroke("#471e1e");
  strokeWeight(5);
  rect(firstDoor.x, firstDoor.y, firstDoor.w, firstDoor.h);
  pop();
}

function drawSecondDoor() {
  push();
  fill(secondDoor.fill.r, secondDoor.fill.g, secondDoor.fill.b);
  stroke("#1e4728");
  strokeWeight(5);
  rect(secondDoor.x, secondDoor.y, firstDoor.w, secondDoor.h);
  pop();
}

function drawThirdDoor() {
  push();
  fill(thirdDoor.fill.r, thirdDoor.fill.g, thirdDoor.fill.b);
  stroke("#1e2e47");
  strokeWeight(5);
  rect(thirdDoor.x, thirdDoor.y, firstDoor.w, thirdDoor.h);
  pop();
}

function mouseClicked() {
  if (
    mouseX >= firstDoor.x &&
    mouseX <= firstDoor.x + firstDoor.w &&
    mouseY >= firstDoor.y &&
    mouseY <= firstDoor.y + firstDoor.h
  ) {
    console.log("Red door");
  }
   if (
    mouseX >= secondDoor.x &&
    mouseX <= secondDoor.x + secondDoor.w &&
    mouseY >= secondDoor.y &&
    mouseY <= secondDoor.y + secondDoor.h
  ) {
    console.log("Green door");
  }
  if (
    mouseX >= thirdDoor.x &&
    mouseX <= thirdDoor.x + thirdDoor.w &&
    mouseY >= thirdDoor.y &&
    mouseY <= thirdDoor.y + thirdDoor.h
  ) {
    console.log("Blue door");
  }
}
