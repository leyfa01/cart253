/**
 * Grow and shine
 * Leyna Feknous
 * 
 * Click on the moon to make it turn into the sun 
 */

"use strict";

// Variable of the moon
let growingMoon = {
    x:250,
    y:250,
    fill : {
        r:200,
        g:220,
        b:250
    }
}
// Variable of the width and height of the moon
let wGrow = 100;
let hGrow = 100;

// Variable of the rgb for the background
let bgColor = {
    r:0,
    g:50,
    b:250
}
/**
 * Create the canvas
*/
function setup() {
createCanvas(500,500);
}


/**
 * Draws the background and the circle(moon)
*/
function draw() {
    // Set the backgrond using the value from bgColo(rgb)
    background(bgColor.r, bgColor.g, bgColor.b);

    // Draw the moon
    push();
    noStroke();
    fill(growingMoon.fill.r, growingMoon.fill.g, growingMoon.fill.b);
    ellipse(growingMoon.x, growingMoon.y, wGrow, hGrow)
    pop();

}
// Make the circle grow each time the mouse is clicked
function mouseClicked(){
    // If the width or height of the moon is not equal to 250
    // then add 10 to the value of the height and widht
    if(wGrow != 250 || hGrow != 250){
        wGrow+=10;
        hGrow+=10;
    }
    // if the width or height is greater or = to 250
    // then change the color of the backround and the moon
    else{
        if( wGrow >= 250 || hGrow >= 250)
        bgColor.r = 100;
        bgColor.g = 150
        bgColor.b = 250;
        growingMoon.fill.r = 200;
        growingMoon.fill.g = 200;
        growingMoon.fill.b = 20;
    }
 
}