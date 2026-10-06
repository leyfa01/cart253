/**
 * Find the snowman
 * Leyna Feknous
 *
 * The player must find the snowman by clicking one of three doors.
 *
 */

"use strict";

/**
 * Variable for the position, size, and color of the red door
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
// Variable for the position, size, and color of the green door
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
// Variable for the position, size, and color of the blue door
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
// Variable for the position, size, and color of the snowman
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
// Controls if the snowman should appear
let showFirstPrize = false;

// Creates the canvas
function setup() {
  createCanvas(1000, 700);
}

/**
 * Draws the background, instructions, doors and snowman
 */
function draw() {
  background(200, 200, 200);
  //   Instruction
  textSize(100);
  text("Find the snowman", 90, 590);
  //   Doors
  drawFirstDoor();
  drawSecondDoor();
  drawThirdDoor();
  //   Show the snowman if the first door is selected
  if (showFirstPrize) {
    prizeFirstDoor();
  }
}
// Draw the red door
function drawFirstDoor() {
  push();
  fill(firstDoor.fill.r, firstDoor.fill.g, firstDoor.fill.b);
  stroke("#471e1e");
  strokeWeight(5);
  rect(firstDoor.x, firstDoor.y, firstDoor.w, firstDoor.h);
  pop();
}
// Draw the green door
function drawSecondDoor() {
  push();
  fill(secondDoor.fill.r, secondDoor.fill.g, secondDoor.fill.b);
  stroke("#1e4728");
  strokeWeight(5);
  rect(secondDoor.x, secondDoor.y, firstDoor.w, secondDoor.h);
  pop();
}
// Draw the blue door
function drawThirdDoor() {
  push();
  fill(thirdDoor.fill.r, thirdDoor.fill.g, thirdDoor.fill.b);
  stroke("#1e2e47");
  strokeWeight(5);
  rect(thirdDoor.x, thirdDoor.y, firstDoor.w, thirdDoor.h);
  pop();
}
// Draws the snowman behind the red door
function prizeFirstDoor() {
  // Draw the middle of the snowman
  push();
  noStroke();
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 50,
    resultFirstDoor.w + 20,
    resultFirstDoor.h + 20,
  );
  pop();
  // Draw the head
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
  // Draw the bottom
  push();
  noStroke();
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 110,
    resultFirstDoor.w + 40,
    resultFirstDoor.h + 40,
  );
  pop();
  // Draw the nose
  push();
  noStroke();
  fill("orange");
  triangle(195, 245, 195, 255, 235, 250);
  pop();
  // Draw the mouth
  push();
  fill(0, 0, 0);
  bezier(190, 260, 195, 270, 205, 270, 210, 260);
  pop();
  // Draw the eyes
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
  //   The first button
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
  //   The second button
  push();
  fill(0, 0, 0);
  ellipse(
    resultFirstDoor.x,
    resultFirstDoor.y + 80,
    resultFirstDoor.w - 40,
    resultFirstDoor.h - 40,
  );
  pop();
  //   The third button
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
  // Check if the red door is clicked
  if (
    mouseX >= firstDoor.x &&
    mouseX <= firstDoor.x + firstDoor.w &&
    mouseY >= firstDoor.y &&
    mouseY <= firstDoor.y + firstDoor.h
  ) {
    showFirstPrize = true;
  }
  //   Check if the green door si clicked
  if (
    mouseX >= secondDoor.x &&
    mouseX <= secondDoor.x + secondDoor.w &&
    mouseY >= secondDoor.y &&
    mouseY <= secondDoor.y + secondDoor.h
  ) {
    ((secondDoor.fill = 0), 0, 0);
  }
  //   Check if the blue door si clicked
  if (
    mouseX >= thirdDoor.x &&
    mouseX <= thirdDoor.x + thirdDoor.w &&
    mouseY >= thirdDoor.y &&
    mouseY <= thirdDoor.y + thirdDoor.h
  ) {
    ((thirdDoor.fill = 0), 0, 0);
  }
}
