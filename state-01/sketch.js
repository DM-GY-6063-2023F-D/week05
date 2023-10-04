let state = 0;

let shapeDiam = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(220);
}

function draw() {}

function mouseClicked() {
  if (state == 0) {
    fill("deeppink");
    state = 1;
  } else if (state == 1) {
    fill("darkviolet");
    state = 2;
  } else if (state == 2) {
    fill("gold");
    state = 0;
  }
  rect(mouseX, mouseY, shapeDiam, shapeDiam);
}
