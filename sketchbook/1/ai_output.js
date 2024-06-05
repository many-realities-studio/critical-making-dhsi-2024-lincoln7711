function setup() {
    createCanvas(400, 400);
    noLoop(); // Only draw once
}

function draw() {
    background(220);

    // Isosceles triangle 1
    stroke(255, 0, 0); // Red stroke
    fill(255, 200, 200); // Light red fill
    triangle(50, 350, 150, 100, 250, 350);

    // Isosceles triangle 2  
    stroke(0, 255, 0); // Green stroke
    fill(200, 255, 200); // Light green fill
    triangle(100, 300, 200, 150, 300, 300);

    // Isosceles triangle 3
    stroke(0, 0, 255); // Blue stroke 
    fill(200, 200, 255); // Light blue fill
    triangle(150, 250, 200, 50, 250, 250);

    // Rectangle 1
    stroke(255, 255, 0); // Yellow stroke
    fill(255, 255, 200); // Light yellow fill
    rect(50, 50, 100, 60);

    // Rectangle 2
    stroke(128, 0, 128); // Purple stroke
    fill(230, 200, 230); // Light purple fill
    rect(250, 200, 80, 120);

    // Circle
    stroke(255, 128, 0); // Orange stroke
    fill(255, 220, 200); // Light orange fill
    circle(330, 100, 80);
}
