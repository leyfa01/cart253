/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Variable for the center of the flower

let flashlight ={
    x: 250,
    y: 250,
    w:100,
    h:100,

    fill:{
        r:250,
        g:200,
        b:50
    },

}
let redCircle ={
    x: 250,
    y: 250,
    w:100,
    h:100,

    fill:{
        r:20,
        g:200,
        b:50
    },

}


/**
 * Added a canvas
*/
function setup() {
createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0,0,0);

let distance = dist(mouseX,mouseY, redCircle.x, redCircle.y);

if(distance <= flashlight.w/ 2){
    fill(redCircle.fill.r, redCircle.fill.g, redCircle.fill.b);
}

console.log(redCircle.fill);

// Draw the flashlight
push();
fill(flashlight.fill.r, flashlight.fill.g, flashlight.fill.b, 50);
ellipse(mouseX, mouseY, flashlight.w, flashlight.h);
pop();

push();
fill(0);
ellipse(redCircle.x, redCircle.y, redCircle.w, redCircle.h);
pop();
}