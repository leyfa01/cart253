/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let cookie = {
    x: 300,
    y: 300,
    size: 150
};
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#f5ebe0");
    drawCookie();

}

function drawCookie() {
    // Cookie
    push();
    noStroke();
    fill("#d4a373");
    ellipse(cookie.x, cookie.y, cookie.size);

    // Chocolate chips
    fill("#5c3d2e");
    ellipse(cookie.x - 30, cookie.y - 20, 15);
    ellipse(cookie.x + 25, cookie.y - 30, 12);
    ellipse(cookie.x + 10, cookie.y + 25, 14);
    ellipse(cookie.x - 25, cookie.y + 30, 10);
    pop();
}