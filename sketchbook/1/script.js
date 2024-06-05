function setup() {
  createCanvas(800, 600);
  background("pink"); // White background

  // Triangle 1
  stroke(255, 0, 0); // Red stroke
  fill(255, 200, 200); // Light red fill
  triangle(100, 100, 150, 50, 200, 100);

  // Triangle 2
  stroke(0, 255, 0); // Green stroke
  fill(200, 255, 200); // Light green fill
  triangle(300, 100, 350, 50, 400, 100);

  // Triangle 3
  stroke(0, 0, 255); // Blue stroke
  fill(200, 200, 255); // Light blue fill
  triangle(500, 100, 550, 50, 600, 100);

  // Rectangle 1
  stroke(255, 165, 0); // Orange stroke
  fill(255, 220, 180); // Light orange fill
  rect(100, 200, 150, 100);

  // Rectangle 2
  stroke(128, 0, 128); // Purple stroke
  fill(220, 180, 255); // Light purple fill
  rect(300, 200, 200, 100);

  // Circle
  stroke(0, 255, 255); // Cyan stroke
  fill(180, 255, 255); // Light cyan fill
  circle(600, 250, 100);
}

function draw() {
  // No need to draw anything continuously
}
