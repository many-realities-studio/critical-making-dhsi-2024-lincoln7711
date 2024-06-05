// Variables to store the ball's position and velocity
let ballX, ballY;
let ballSpeedX, ballSpeedY;

// Setup function to initialize the canvas and ball properties
function setup() {
  createCanvas(800, 600); // Create a canvas of 800x600 pixels
  ballX = width / 2; // Initialize ball's x position at the center of the canvas
  ballY = height / 2; // Initialize ball's y position at the center of the canvas
  ballSpeedX = 5; // Set the ball's horizontal speed
  ballSpeedY = 3; // Set the ball's vertical speed
}

// Draw function to continuously update the canvas
function draw() {
  background(0); // Set the background color to black

  // Update the ball's position based on its speed
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Check for collision with the canvas edges and reverse direction if needed
  if (ballX > width || ballX < 0) {
    ballSpeedX *= -1; // Reverse horizontal direction
  }
  if (ballY > height || ballY < 0) {
    ballSpeedY *= -1; // Reverse vertical direction
  }

  // Calculate the color based on the mouse's horizontal position
  let colorValue = map(mouseX, 0, width, 0, 255); // Map mouseX to a range of 0 to 255
  fill(colorValue, 100, 150); // Set the fill color with varying red component
  noStroke(); // Disable the stroke

  // Draw the ball
  ellipse(ballX, ballY, 50, 50); // Draw an ellipse at the ball's position with a diameter of 50

  // Display the frame count on the canvas
  fill(255); // Set the fill color to white
  textSize(16); // Set the text size
  text("Frame Count: " + frameCount, 10, 20); // Display the frame count at the top-left corner
}
