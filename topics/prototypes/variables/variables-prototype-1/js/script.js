/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let ball = {
    x:250,
    y:250,
    h:100,
    w:100,

    fill:{
        r: 250,
        g: 250,
        b: 50,
    },
    
    velocity:{
        x: -1,
        y: 1
    },

    acceleration:{
        x: 3,
        y: 3 
    }
}

   

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(50, 150, 150);




// Making the ball move by his current speed
ball.x += ball.velocity.x;
ball.y += ball.velocity.y;

// Define the limits
ball.x = constrain(ball.x, 50, 450);
ball.y = constrain(ball.y, 50, 450);

// // Bounce when it touch the limit
// if(ball.x >= 450 || ball.x <= 0){
//     ball.velocity.x = ball.velocity.x;
// }
// if(ball.y >= 450 || ball.y <= 0){
//     ball.velocity.y = -ball.velocity.y;
// }

// Acceleration over time
ball.velocity.x += ball.acceleration.x
ball.velocity.y += ball.acceleration.y
// Draw the ball
push();
noStroke();
fill(ball.fill.r,ball.fill.g,ball.fill.b);
ellipse(ball.x, ball.y, ball.w, ball.h);
pop();
}

