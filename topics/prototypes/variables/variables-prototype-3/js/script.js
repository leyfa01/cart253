/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let growingCircle = {
    x:250,
    y:250,
    fill : {
        r:200,
        g:220,
        b:250
    }
}
let wGrow = 100;
let hGrow = 100;
let bgColor = {
    r:0,
    g:50,
    b:250
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
    
    background(bgColor.r, bgColor.g, bgColor.b);

    push();
    noStroke();
    fill(growingCircle.fill.r, growingCircle.fill.g, growingCircle.fill.b);
    ellipse(growingCircle.x, growingCircle.y, wGrow, hGrow)
    pop();

}

function mouseClicked(){
    if(wGrow != 250 || hGrow != 250){
        wGrow+=10;
        hGrow+=10;
    }
    else{
        if( wGrow >= 250 || hGrow >= 250)
        bgColor.r = 100;
        bgColor.g = 150
        bgColor.b = 250;
        growingCircle.fill.r = 200;
        growingCircle.fill.g = 200;
        growingCircle.fill.b = 20;
    }
 
}