/**
 * Movement
 * Leyna Feknous
 * 
 * Experimating with movement
 */

"use strict";

let bird ={
    x: 120,
    y: 480,
    size: 50,
    // velocity is the movement
    velocity: {
        x:0,
        y:0
    },
    // minimum and maximum velocity
    minVelocity: {
        x: -3,
        y: -2

    },
     maxVelocity: {
        x: 3,
        y: 2

    },
    // we add the acceleration to the velocity every frame the it's gonna move
    acceleration:{
        x: 0.025,
        y: -0.2
    }

}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(540, 480);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0);

// Move the bird
bird.velocity.x = bird.velocity.x + bird.acceleration.x;
bird.velocity.y = bird.velocity.y + bird.acceleration.y;

// we constrain the minimum velocity and the  max velocity between them on the x axes
bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x , bird.maxVelocity.x);
// we constrain the minimum velocity and the  max velocity between them on the y axes
bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y , bird.maxVelocity.y);


bird.x = bird.x + bird.velocity.x;
// here we add the velocity instead of subtracting 
// cuz we alway want to add the current value of the velocity
bird.y = bird.y + bird.velocity.y;


// Draw the bird
push();
fill(255,0,0);
noStroke();
ellipse(bird.x, bird.y, bird.size);
pop();
}