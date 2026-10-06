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
let resultFirstDoor = {
  x: 200,
  y: 250,
  w: 50,
  h: 50,

  fill: {
    r: 100,
    g: 150,
    b: 250,
  },
};
let showFirstPrize = false;

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
  if (showFirstPrize) {
    prizeFirstDoor();
  }
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
function prizeFirstDoor() {
  push();
  noStroke();
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 50,
    resultFirstDoor.w + 20,
    resultFirstDoor.h + 20,
  );
  pop();

  push();
  noStroke();
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y,
    resultFirstDoor.w,
    resultFirstDoor.h,
  );
  ((firstDoor.fill = resultFirstDoor.fill.r),
    resultFirstDoor.fill.g,
    resultFirstDoor.fill.b);
  pop();

  push();
  noStroke();
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 110,
    resultFirstDoor.w + 40,
    resultFirstDoor.h + 40,
  );
  pop();

  push();
  noStroke();
  fill("orange");
  triangle(195, 245, 195, 255, 235, 250);
  pop();

  push();
  fill(0,0,0);
  bezier(190, 260, 195, 270, 205, 270, 210, 260);
  pop();

  push();
  fill(0, 0, 0);
  ellipse(
    resultFirstDoor.x + 10,
    resultFirstDoor.y - 10,
    resultFirstDoor.w - 40,
    resultFirstDoor.h - 40,
  );
  pop();
  push();
  fill(0, 0, 0);
  ellipse(
    resultFirstDoor.x - 10,
    resultFirstDoor.y - 10,
    resultFirstDoor.w - 40,
    resultFirstDoor.h - 40,
  );
  pop();
  push();
  fill(0, 0, 0);
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 40,
    resultFirstDoor.w - 40,
    resultFirstDoor.h - 40,
  );
  pop();
  push();
  fill(0, 0, 0);
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 80,
    resultFirstDoor.w - 40,
    resultFirstDoor.h - 40,
  );
  pop();

  push();
  fill(0, 0, 0);
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 120,
    resultFirstDoor.w - 40,
    resultFirstDoor.h - 40,
  );
  pop();
}
function mouseClicked() {
  if (
    mouseX >= firstDoor.x &&
    mouseX <= firstDoor.x + firstDoor.w &&
    mouseY >= firstDoor.y &&
    mouseY <= firstDoor.y + firstDoor.h
  ) {
    showFirstPrize = true;
    console.log("Red door");
  }
  if (
    mouseX >= secondDoor.x &&
    mouseX <= secondDoor.x + secondDoor.w &&
    mouseY >= secondDoor.y &&
    mouseY <= secondDoor.y + secondDoor.h
  ) {
    ((secondDoor.fill = 0), 0, 0);
    console.log("Green door");
  }
  if (
    mouseX >= thirdDoor.x &&
    mouseX <= thirdDoor.x + thirdDoor.w &&
    mouseY >= thirdDoor.y &&
    mouseY <= thirdDoor.y + thirdDoor.h
  ) {
    ((thirdDoor.fill = 0), 0, 0);
    console.log("Blue door");
  }
}
