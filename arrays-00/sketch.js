let xPos = [0, 0, 0, 0, 0, 0];
let yPos = [150, 250, 350, 450, 500, 60];
let xVel = [2, 3, 4, 2, 3, 4];
let cDiam = [40, 40, 40, 40, 40, 40];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for (let i = 0; i < 6; i += 1) {
    // draw circles
    ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);

    // update xPos
    xPos[i] = xPos[i] + xVel[i];

    // if reset is needed: pick random diameter and reset x
    if (xPos[i] > width + cDiam[i]) {
      cDiam[i] = random(20, 75);
      xPos[i] = 0 - cDiam[i];
    }
  }
}
