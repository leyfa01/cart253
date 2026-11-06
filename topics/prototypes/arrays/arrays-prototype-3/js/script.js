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

let ants = [];

let numAnts = 15;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < numAnts; i++) {
        let ant = createAnt();
        ants.push(ant);
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#e6d4c1");
    drawCookie();

    for (let ant of ants) {
        moveAnt(ant);
        drawAnt(ant);
    }
    
    for (let ant of ants) {
        drawAnt(ant);
    }

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

function createAnt() {
    let ant = {
        x: random(width),
        y: random([0, height]),
        size: 12,
        speed: random(0.5, 1.5)
    };
    return ant;
}

function drawAnt(ant) {
    push();
    noStroke();
    fill(0);
    ellipse(ant.x - ant.size * 0.6, ant.y, ant.size * 0.6);
    ellipse(ant.x, ant.y, ant.size * 0.8);
    ellipse(ant.x + ant.size * 0.7, ant.y, ant.size);
    pop();
}

function moveAnt(ant) {
    // How far the ant is from the cookie
    let dx = cookie.x - ant.x;
    let dy = cookie.y - ant.y;
    let distance = dist(ant.x, ant.y, cookie.x, cookie.y);

    // Only move if the ant hasn't reached the cookie yet
    if (distance > cookie.size / 2) {
        ant.x = ant.x + (dx / distance) * ant.speed;
        ant.y = ant.y + (dy / distance) * ant.speed;
    }
}