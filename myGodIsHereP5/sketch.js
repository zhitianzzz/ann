var bgImg;

function preload() {
  bgImg = loadImage('images/entrance1.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //centre img and position it to fit the screen, crop allowed
  let scale = max(width / bgImg.width, height / bgImg.height);
  let x = (width - bgImg.width * scale) / 2;
  let y = (height - bgImg.height * scale) / 2;
  image(bgImg, x, y, bgImg.width * scale, bgImg.height * scale);

  noFill();
  noStroke();
  let boxSize = min(width, height) * 0.65;
  let boxX = (width - boxSize) / 2;
  let boxY = (height - boxSize) / 2;
  rect(boxX, boxY, boxSize, windowHeight);

  let rectWidth = width * 0.2; // 20% of the window width
  let rectHeight = height; // 100% of the window height
  rect(0, 0, rectWidth, rectHeight);

  let rectX = width * 0.8; // Start at 80% of the window width
  rect(rectX, 0, rectWidth, rectHeight);

if ((mouseX > boxX && mouseX < boxX + boxSize && mouseY > boxY && mouseY < boxY + windowHeight) ||
    (mouseX >= 0 && mouseX <= rectWidth && mouseY >= 0 && mouseY <= rectHeight) ||
    (mouseX >= rectX && mouseX <= rectX + rectWidth && mouseY >= 0 && mouseY <= rectHeight)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  let boxSize = min(width, height) * 0.8;
  let boxX = (width - boxSize) / 2;
  let boxY = (height - boxSize) / 2;

  if (mouseX > boxX && mouseX < boxX + boxSize 
    && mouseY > boxY && mouseY < boxY + windowHeight) {
    window.location.href = 'https://zhitianzzz.github.io/ashes/myGodIsHere.html';
  } else if (mouseX >= 0 && mouseX <= width * 0.2 && mouseY >= 0 && mouseY <= height) {
    window.location.href = '../myGodIsHerePathA.html';
  } else if (mouseX >= width * 0.8 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    window.location.href = '../myGodIsHerePathB.html';
  }
}
