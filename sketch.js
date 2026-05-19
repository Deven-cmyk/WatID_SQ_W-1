let diceImg;

let dice1X, dice2X;
let speed = 4;

function preload() {
  diceImg = loadImage("dice.jpg");
}

function setup() {
  createCanvas(800, 600);

  dice1X = 0;
  dice2X = -300;
}

function draw() {
  // 🌤 Sky blue background
  background(135, 206, 235);

  drawJengaTower();
  drawDice();
  drawText();
}

// 🧱 JENGA TOWER (center)
function drawJengaTower() {
  rectMode(CENTER);
  noStroke();

  let blockW = 90;
  let blockH = 20;
  let baseY = height / 2 + 120;

  for (let i = 0; i < 12; i++) {
    let y = baseY - i * blockH;

    let horizontal = i % 2 === 0;

    for (let j = -1; j <= 1; j++) {
      fill(210, 180, 140); // light wood color

      if (horizontal) {
        rect(width / 2 + j * 30, y, blockW, blockH, 4);
      } else {
        rect(width / 2 + j * 30, y, blockH, blockW, 4);
      }
    }
  }
}

// 🎲 MOVING DICE + MOTION TRAIL
function drawDice() {
  // Motion trail shapes
  for (let i = 0; i < 5; i++) {
    fill(255, 255, 255, 50 - i * 10);
    noStroke();
    ellipse(dice1X - i * 20, height / 2 - 50, 40, 40);
    ellipse(dice2X - i * 20, height / 2 + 50, 40, 40);
  }

  // Draw dice images
  image(diceImg, dice1X, height / 2 - 80, 60, 60);
  image(diceImg, dice2X, height / 2 + 20, 60, 60);

  // Move dice
  dice1X += speed;
  dice2X += speed;

  // Loop animation
  if (dice1X > width) {
    dice1X = -100;
  }
  if (dice2X > width) {
    dice2X = -200;
  }
}

// 📝 TEXT
function drawText() {
  fill(50);
  textSize(32);
  textAlign(CENTER);
  text("Jenga Motion", width / 2, 50);
}
