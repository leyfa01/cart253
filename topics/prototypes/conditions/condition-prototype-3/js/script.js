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
let redButton ={
    x:100,
    y:100,
    w:100,
    h:100,

    fill : {
        r:200,
        g:50,
        b:50
    }
}
function setup() {
createCanvas(500,500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200,200,200);

    redButton();

}
function redButton(){
    push();
    fill(redButton.fill.r,redButton.fill.g,redButton.fill.b);
    ellipse(redButton.x,redButton.y,redButton.w,redButton.h);
    pop();
}