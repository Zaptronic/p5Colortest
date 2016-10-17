var Y_AXIS = 1;
var X_AXIS = 2;

var colorSetterA, colorSetterB;

var incrementer = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    colorMode(HSB);
    colorSetterA = color(360, 0, 0);
    colorSetterB = color(0, 100, 100);
}

function draw() {
    setGradient(0, 0, windowWidth, windowHeight, colorSetterA, colorSetterB, Y_AXIS);
    if (frameCount%100 === 0) {
        console.log(colorSetterA);
    }


    var hueSetter = map(sin(incrementer), -1, 1, 0, 360);
    var satSetter = map(sin(incrementer), -1, 1, 0, 100);
    var brightSetter = map(sin(incrementer), -1, 1, 0, 100);
    colorSetterA = color(hueSetter, satSetter, brightSetter);
    colorSetterB = color(hueSetter-180, satSetter, brightSetter);
    incrementer += 0.02;
}

function setGradient(x, y, w, h, c1, c2, axis) {
  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
