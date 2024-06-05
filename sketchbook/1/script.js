let shapes = []; // Array to store shape data

function setup() {
  createCanvas(600, 800);
  background(255, 200, 200); // Set background to pink
  noLoop(); // Only draw once

  // Generate shapes until we have 6 non-overlapping ones
  while (shapes.length < 6) {
    let newShape = generateShape();
    if (!isOverlapping(newShape)) {
      shapes.push(newShape);
    }
  }
}

function draw() {
  // Draw each shape in the array
  for (let shape of shapes) {
    stroke(shape.strokeColor);
    fill(shape.fillColor);

    if (shape.type === 'triangle') {
      triangle(shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3);
    } else if (shape.type === 'rectangle') {
      rect(shape.x, shape.y, shape.w, shape.h);
    } else if (shape.type === 'circle') {
      circle(shape.x, shape.y, shape.d);
    }
  }
}

// Generate a random shape with random properties
function generateShape() {
  let shapeType = random(['triangle', 'rectangle', 'circle']);

  if (shapeType === 'triangle') {
    return {
      type: 'triangle',
      x1: random(width), y1: random(height),
      x2: random(width), y2: random(height),
      x3: random(width), y3: random(height),
      strokeColor: color(random(255), random(255), random(255)),
      fillColor: color(random(255), random(255), random(255))
    };
  } else if (shapeType === 'rectangle') {
    return {
      type: 'rectangle',
      x: random(width), y: random(height),
      w: random(20, 80), h: random(20, 80),
      strokeColor: color(random(255), random(255), random(255)),
      fillColor: color(random(255), random(255), random(255))
    };
  } else if (shapeType === 'circle') {
    return {
      type: 'circle',
      x: random(width), y: random(height),
      d: random(20, 80),
      strokeColor: color(random(255), random(255), random(255)),
      fillColor: color(random(255), random(255), random(255))
    };
  }
}

// Check if a shape overlaps with any existing shapes
function isOverlapping(shape) {
  for (let existingShape of shapes) {
    if (existingShape.type === 'rectangle' && shape.type === 'rectangle') {
      if (rectRect(existingShape, shape)) {
        return true;
      }
    } else if (existingShape.type === 'circle' && shape.type === 'circle') {
      if (circleCircle(existingShape, shape)) {
        return true;
      }
    } else {
      if (rectCircle(existingShape, shape) || rectCircle(shape, existingShape)) {
        return true;
      }
    }
  }
  return false;
}

// Collision detection functions
function rectRect(r1, r2) {
  return (r1.x < r2.x + r2.w && r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h && r1.y + r1.h > r2.y);
}

function circleCircle(c1, c2) {
  let distance = dist(c1.x, c1.y, c2.x, c2.y);
  return (distance < (c1.d / 2 + c2.d / 2));
}

function rectCircle(rect, circle) {
  let cx = circle.x;
  let cy = circle.y;

  let rx = rect.x;
  let ry = rect.y;
  let rw = rect.w;
  let rh = rect.h;

  let testX = cx;
  let testY = cy;

  if (cx < rx) testX = rx;
  else if (cx > rx + rw) testX = rx + rw;
  if (cy < ry) testY = ry;
  else if (cy > ry + rh) testY = ry + rh;

  let distance = dist(cx, cy, testX, testY);

  return (distance <= circle.d / 2);
}
