/**
 * Circle Master
 * Leyna Feknous
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000", 
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};
const target = {
  x: 100,
  y: 60,
  size: 100,
  fill: "#fee50b",

  fills : {
    happy: "#14e970",
    sad: "#2f39ff"
  }
  
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();

  // Draw the target
  drawTarget();
  // Move puck circle
  movePuck();

  // Change the color of the target
  checkTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

// Display the target
function drawTarget(){
  push();
  stroke(255);
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}


function movePuck(){
  const distance = dist(user.x, user.y, puck.x, puck.y);
  const mouseIsOverlapping = distance < user.size /2 + puck.size/2;

   if(mouseIsOverlapping){
    if(user.x > puck.x){
      puck.x -=1;
    }
    if(user.y > puck.y){
      puck.y -=1;
    }
    if(user.x < puck.x){
      puck.x +=1;
    }
    if(user.y < puck.y){
      puck.y +=1;
    }
   }
    
}
function checkTarget(){
  const distanceTarget = dist(puck.x, puck.y, target.x, target.y);
  const puckIsOverlapping = distanceTarget < puck.size/2 + target.size /2;

  if(puckIsOverlapping){
    target.fill = target.fills.happy;
  }
  else{
    target.fill = target.fills.sad;
  }
}