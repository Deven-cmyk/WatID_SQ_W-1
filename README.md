# Week 1 Example 1: Images and Shapes

## What This Example Demonstrates

> **Note for students:** This section is included in example files only to help you study. Do not include it in your Side Quest submissions.

This example introduces how to load and display images alongside shapes drawn with p5.js code.

- `preload()` — loads images and sounds before the sketch starts, so they are ready to use in `setup()` and `draw()`
- `setup()` — runs once at the start; used here to draw everything since nothing needs to animate
- `draw()` — runs on a loop after `setup()`; left empty here since the sketch is static
- `image()` — draws a loaded image onto the canvas at a specified position and size
- `rect()`, `ellipse()`, `line()` — basic shape functions used to build the controller drawing
- `fill()`, `stroke()`, `strokeWeight()` — control the colour and outline of shapes and text
- `text()`, `textSize()`, `textAlign()` — display and style text on the canvas
- `mousePressed()` — runs code automatically each time the mouse is clicked
- `keyPressed()` — runs code automatically each time a key is pressed; used here as a debug tool to log mouse coordinates

## Setup and Interaction Instructions

To run the sketch locally, open `index.html` in Google Chrome. No additional setup is required.

To play via GitHub Pages, visit the link provided on the submission page.

**How to interact:**

- Click anywhere on the canvas to draw a random-coloured circle at that position.
- Press **k** to log the current mouse coordinates to the Chrome console (useful for positioning shapes).

## Assets

| File | Source |
|------|--------|
| `assets/images/controller.png` | Drawn by Karen Cochrane |

## References

N/A
