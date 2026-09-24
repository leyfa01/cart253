/**
 * Mr. Furious
 * Leyna Feknous
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 255,
    b: 255,
  },
  velocity: {
    x: 0,
    y: 0
  },

   acceleration: {
    x: 0.02,
    y: 0.02
  },

  maxVel:{
    x:3
  },

  minVel:{
    x:-3
  
  }

};
// Variable of the sky
let sky = {
  // Color of the sky
  fill: {
    r: 160,
    g: 180,
    b: 200
  },
};
// Variable of the annoying bird
let bird = {
  x: 0,
  y: 100,
  size: 50,

  fill: {
    r: 0,
    g: 255,
    b: 255
  },

  // Direction of the bird and his current speed
  velocity: {
    x: 0,
    y: -1
  },
  // How the velocity is gonna change overtime
  acceleration: {
    x: 0.03,
    y: 0.01
  },


};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  // Setting the background color with variables
  background(sky.fill.r, sky.fill.g, sky.fill.b);

  // Changing the color of the sky overtime so it will be black --> fill(0,0,0);
  sky.fill.r -= 1;
  sky.fill.g -= 1;
  sky.fill.b -= 1;

  // Changing the color of mrFurious overtime
  mrFurious.fill.g -= 1;
  mrFurious.fill.b -= 1;

  // Keep the value of the green and blue between 0 and 200
  mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 200);
  mrFurious.fill.b = constrain(mrFurious.fill.b, 0, 200);

  // Changing the velocity randomly
  mrFurious.x += random(-mrFurious.velocity.x, mrFurious.velocity.x);

  // Accelerate the speed of the shake over time
  mrFurious.velocity.x += mrFurious.acceleration.x;
  
  // Limitate the range of the shake
  mrFurious.velocity.x = constrain(mrFurious.velocity.x, mrFurious.minVel.x, mrFurious.maxVel.x);

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();



  // Draw the bird
  push();
  noStroke();
  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  ellipse(bird.x, bird.y, bird.size);
  pop();

  // Making the bird move with his current speed
  bird.x += bird.velocity.x;
  bird.y += bird.velocity.y;

  // acceleration over time
  bird.velocity.x += bird.acceleration.x;
  bird.velocity.y += bird.acceleration.y;

  console.log(mrFurious.x, mrFurious.y);
}
