/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Stores the orb object
let orb1=undefined;
let orb2=undefined;
let orb3=undefined;


/**
 * Create the canvas and creates the starting orb
*/
function setup() {
    createCanvas(1000,600);
    orb1 = createOrb();
    orb2 = createOrb();
    orb3 = createOrb();
}

// Function that create and returns a new orb with random position and size
function createOrb(){
let orb = {
x: random(100,1000),
y: random(100,600),
size: random(50,100),
fill :{
    r:250,
    g:200,
    b:13
},
velocity:{
    x:0.1,
    y:-0.1
},
acceleration:{
    x:0,
    y:0.01
}
};
return orb;
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(100,150,250);

updateOrb(orb1);
updateOrb(orb2);
updateOrb(orb3);
}
function updateOrb(orb){
drawOrb(orb);
moveOrb(orb);
}
// Move the orb and create buzzing effect
function moveOrb(orb){
    // Move the orb based on its velocity
    orb.x += orb.velocity.x;
    orb.y += orb.velocity.y;
    // Add random offsets
    orb.x += random(-1.5, 1.5);
    orb.y += random(-1.5, 1.5);

}
// Draws the orb
function drawOrb(orb){
    push();
    noStroke();
    fill(orb.fill.r,orb.fill.g,orb.fill.b);
    ellipse(orb.x,orb.y,orb.size);
    pop();
}
function checkDistance(orb){
    const distance = dist(mouseX, mouseY, orb.x,orb.y);
    if (distance <orb.size/2){
        return createOrb();
    }
    return orb;
}
function mousePressed(){
        orb1 = checkDistance(orb1);
        orb2 = checkDistance(orb2);
        orb3 = checkDistance(orb3);
}

