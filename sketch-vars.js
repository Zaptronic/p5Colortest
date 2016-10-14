var hueSetter = 0;
var satSetter = 0;
var brightSetter = 0;
var incrementer = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    colorMode(HSB);
}

function draw() {
    fill(hueSetter, satSetter, brightSetter);
    rect(0,0,windowWidth/2, windowHeight);
    fill(hueSetter - 180, satSetter, brightSetter);
    rect(windowWidth/2,0,windowWidth/2, windowHeight);
    hueSetter = map(sin(incrementer), -1, 1, 0, 360);
    satSetter = map(sin(incrementer), -1, 1, 0, 100);
    brightSetter = map(sin(incrementer), -1, 1, 0, 100);
    incrementer += 0.002;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
