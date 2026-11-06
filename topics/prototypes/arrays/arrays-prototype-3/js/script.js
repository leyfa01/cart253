/**
 * Cookie Defender
 * Leyna Feknous
 * 
 * Click on the ants to squash them before they eat the cookie
 * 
 */

"use strict";

// The cookie
let cookie = {
    x: 300,
    y: 300,
    size: 150
};

// The ants
let ants = [];

// Number of ants
let numAnts = 15;

// How fast the cookie gets eaten
let biteSize = 0.05;
/**
 * Creates the canvas and the ants
*/
function setup() {
    createCanvas(600, 600);

    // Add the ants to the array
    for (let i = 0; i < numAnts; i++) {
        let ant = createAnt();
        ants.push(ant);
    }
}


/**
 * Draws the game
*/
function draw() {
    background("#e6d4c1");
    drawCookie();

    // Check if the game is still going
    let gameOn = cookie.size > 0 && ants.length > 0;

    // Move and draw every ant
    for (let ant of ants) {
        if (gameOn) {
            moveAnt(ant);
        }
        drawAnt(ant);
    }

    // End messages
    if (cookie.size <= 0) {
        drawMessage("The ants ate the cookie!");
    }
    else if (ants.length === 0) {
        drawMessage("You saved the cookie!");
    }


}

// Draws the cookie
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

// Creates a new ant
function createAnt() {
    let ant = {
        x: random(width),
        y: random([0, height]),
        size: 12,
        speed: random(1, 1.5)
    };
    return ant;
}

// Draws an ant
function drawAnt(ant) {
    push();
    noStroke();
    fill(0);
    ellipse(ant.x - ant.size * 0.6, ant.y, ant.size * 0.6);
    ellipse(ant.x, ant.y, ant.size * 0.8);
    ellipse(ant.x + ant.size * 0.7, ant.y, ant.size);
    pop();
}

// Moves an ant to the cookie or makes it eat
function moveAnt(ant) {
    // How far the ant is from the cookie
    let dx = cookie.x - ant.x;
    let dy = cookie.y - ant.y;
    let distance = dist(ant.x, ant.y, cookie.x, cookie.y);

    // Only move if the ant hasn't reached the cookie yet
    if (distance > cookie.size / 2 + ant.size / 2) {
        ant.x = ant.x + (dx / distance) * ant.speed;
        ant.y = ant.y + (dy / distance) * ant.speed;
    }
    // Eat the cookie
    else {
        cookie.size = max(cookie.size - biteSize, 0);
    }
}

// Removes the ant when the player clicks
function mousePressed() {
    // Check every ant, backwards
    for (let i = ants.length - 1; i >= 0; i--) {
        let ant = ants[i];
        let distance = dist(mouseX, mouseY, ant.x, ant.y);

        // Remove the ant if clicked
        if (distance < ant.size * 1.5) {
            ants.splice(i, 1);
            break;
        }
    }
}

// Draws a message
function drawMessage(message) {
    push();
    fill(0);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(message, width / 2, 60);
    pop();
}