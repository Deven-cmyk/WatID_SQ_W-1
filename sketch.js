let dice1X = 0;
let dice2X = -200;

let speed = 4;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // 🌤 Sky blue background
  background(135, 206, 235);

  drawJenga();
  drawDice();
  drawText();
}

// 🧱 JENGA TOWER
function drawJenga() {
  rectMode(CENTER);
  noStroke();

  let blockW = 90;
  let blockH = 20;
  let startY = height / 2 + 120;

  for (let i = 0; i < 12; i++) {
    let y = startY - i * blockH;

    let horizontal = i % 2 === 0;

    for (let j = -1; j <= 1; j++) {
      // soft wood color (compliments blue)
      fill(210, 180, 140);

      if (horizontal) {
        rect(width / 2 + j * 30, y, blockW, blockH, 4);
      } else {
        rect(width / 2 + j * 30, y, blockH, blockW, 4);
      }
    }
  }
}

// 🎲 DICE (drawn with shapes instead of image)
function drawDice() {
  drawSingleDice(dice1X, height / 2 - 60, true);
  drawSingleDice(dice2X, height / 2 + 20, false);

  dice1X += speed;
  dice2X += speed;

  // loop
  if (dice1X > width) dice1X = -100;
  if (dice2X > width) dice2X = -200;
}

// 🎲 ONE DIE + TRAIL
function drawSingleDice(x, y, flip) {
  // ✨ motion trail
  for (let i = 0; i < 5; i++) {
    fill(255, 255, 255, 60 - i * 10);
    ellipse(x - i * 20, y + 25, 40);
  }

  // 🎲 dice body
  fill(255);
  stroke(0);
  rect(x, y, 50, 50, 8);

  // 🎯 dots
  fill(0);
  noStroke();

  // center dot
  ellipse(x + 25, y + 25, 8);

  if (flip) {
    ellipse(x + 10, y + 10, 8);
    ellipse(x + 40, y + 40, 8);
  } else {
    ellipse(x + 40, y + 10, 8);
    ellipse(x + 10, y + 40, 8);
  }
}

// 📝 TEXT (you can replace with your about me)
function drawText() {
  fill(50);
  textSize(26);
  textAlign(CENTER);

  text("Jenga Motion Scene", width / 2, 40);

  textSize(14);
  text("By Deven Agnihotri", width / 2, 65);
}
