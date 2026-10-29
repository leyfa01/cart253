/**
 * Catch the Orbs!
 * Leyna Feknous
 * 
 * When you click on an orb, it respawns in a new random position and size.
 * The three orbs move unpredictably to create a buzzing effect.
 */

"use strict";

// Stores the orb object
let orb1=undefined;
let orb2=undefined;
let orb3=undefined;


/**
 * Create the canvas and the starting orbs
*/
function setup() {
    createCanvas(1000,600);
    orb1 = createOrb();
    orb2 = createOrb();
    orb3 = createOrb();
}

// Create and return a new orb with a random position and size
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
 * Set the background color and update all orbs
*/
function draw() {
background(100,150,250);

updateOrb(orb1);
updateOrb(orb2);
updateOrb(orb3);
}
// Draw and move an orb
function updateOrb(orb){
drawOrb(orb);
moveOrb(orb);
}
// Move the orb and create a buzzing effect
function moveOrb(orb){
    // Update the orb's position using its velocity
    orb.x += orb.velocity.x;
    orb.y += orb.velocity.y;
    // Add random offsets
    orb.x += random(-1.5, 1.5);
    orb.y += random(-1.5, 1.5);

}
// Draw the orb
function drawOrb(orb){
    push();
    noStroke();
    fill(orb.fill.r,orb.fill.g,orb.fill.b);
    ellipse(orb.x,orb.y,orb.size);
    pop();
}
// Check whether the mouse click is inside the orb
// Return a new orb if clicked; otherwise, return the original orb
function checkDistance(orb){
    const distance = dist(mouseX, mouseY, orb.x,orb.y);
    
    if (distance <orb.size/2){
        return createOrb();
    }
    return orb;
}
// Respawn any orbs clicked by the mouse
function mousePressed(){
        orb1 = checkDistance(orb1);
        orb2 = checkDistance(orb2);
        orb3 = checkDistance(orb3);
}

