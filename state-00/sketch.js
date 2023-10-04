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
    rect(mouseX, mouseY, shapeDiam, shapeDiam);
    state = 1;
  } else if (state == 1) {
    ellipse(mouseX, mouseY, shapeDiam, shapeDiam);
    state = 2;
  } else if (state == 2) {
    triangle(
      mouseX, mouseY - shapeDiam / 2,
      mouseX - shapeDiam / 2, mouseY + shapeDiam / 2,
      mouseX + shapeDiam / 2, mouseY + shapeDiam / 2
    );
    state = 0;
  }
}
