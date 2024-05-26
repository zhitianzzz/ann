var head;
var eye;
var positions = [];
var mic;
var alerted = false; 
var scared = false;

function preload() {
  head = loadImage('head.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(HAND);
  eye = createVideo(['eye.mp4']);
  eye.hide(); 
  eye.loop();
  positions.push(createVector(width / 2, height / 2));

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let scaleW = windowWidth / head.width;
  let scaleH = windowHeight / head.height;
  let scale = max(scaleW, scaleH);
  
  let imgW = head.width * scale;
  let imgH = head.height * scale;
  
  image(head, (windowWidth - imgW) / 2, (windowHeight - imgH) / 2, imgW, imgH);
  
  let vidHeight = height * 0.1; 
  let vidWidth = (eye.width / eye.height) * vidHeight;

  let volume = mic.getLevel(); 

  for (let pos of positions) {
    let shakeX = 0;
    let shakeY = 0;

    // if volume above 0.1, shake all video
    if (volume > 0.1) {
      shakeX = random(-5, 5);
      shakeY = random(-5, 5);
    }

    // if volume above 0.2, alert 1
    if (volume > 0.2 && !scared) {
      alert('you scared me!');
      scared = true;
    }

    image(eye, pos.x - vidWidth / 2 + shakeX, pos.y - vidHeight / 2 + shakeY, vidWidth, vidHeight);
  }

  // if volume above 0.5, alert 2
  if (volume > 0.5 && !alerted) {
    alert('no!!! go away!');
    alerted = true; 
    window.location.href = 'spiritPathA.html'; //force leave page
  }
}

function mousePressed() {
  positions.push(createVector(mouseX, mouseY));
}

//coded with GitHub Copilot