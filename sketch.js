let dice1X = 0;
let dice2X = -200;
let speed = 4;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);

  drawJenga();
  drawDice();
  drawText();
}

// 🧱 FIXED JENGA TOWER
function drawJenga() {
  rectMode(CENTER);
  noStroke();

  let blockLong = 90;
  let blockShort = 20;

  let startY = height / 2 + 100;

  for (let i = 0; i < 12; i++) {
    let y = startY - i * blockShort;

    let isHorizontal = i % 2 === 0;

    for (let j = -1; j <= 1; j++) {
      fill(205, 170, 120);

      if (isHorizontal) {
        // horizontal layer
        rect(width / 2 + j * (blockShort + 2), y, blockLong, blockShort, 3);
      } else {
        // vertical layer
        rect(width / 2 + j * (blockShort + 2), y, blockShort, blockLong, 3);
      }
    }
  }
}

// 🎲 FIXED DICE
function drawDice() {
  drawDie(dice1X, height / 2 - 80, 1);
  drawDie(dice2X, height / 2 + 20, 2);

  dice1X += speed;
  dice2X += speed;

  if (dice1X > width) dice1X = -80;
  if (dice2X > width) dice2X = -200;
}

// 🎲 DRAW ONE DIE (PROPERLY CENTERED)
function drawDie(x, y, type) {
  let size = 60;

  // motion trail
  for (let i = 0; i < 5; i++) {
    fill(255, 255, 255, 60 - i * 10);
    noStroke();
    rect(x - i * 20, y + size / 2, size * 0.6, size * 0.6, 6);
  }

  // dice body
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(x + size / 2, y + size / 2, size, size, 10);

  // dots (CENTERED CORRECTLY)
  fill(0);
  noStroke();

  let cx = x + size / 2;
  let cy = y + size / 2;
  let offset = size / 4;

  if (type === 1) {
    ellipse(cx, cy, 10); // center dot
  }

  if (type === 2) {
    ellipse(cx - offset, cy - offset, 10);
    ellipse(cx + offset, cy + offset, 10);
  }
}

// 📝 TEXT
function drawText() {
  fill(40);
  textAlign(CENTER);
  textSize(28);
  text("Jenga Scene", width / 2, 40);

  textSize(14);
  text("Deven Agnihotri", width / 2, 65);
}
