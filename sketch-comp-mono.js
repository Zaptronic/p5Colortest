var colorSetter = {
    hueSetter: 0,
    satSetter: 0,
    brightSetter: 0
}
var colorMono = 180;
var monosetter = {};
var incrementer = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    colorMode(HSB);
    colorControl = new colorController();
    gui = new dat.GUI();

    monosetter = gui.add(colorControl, 'mono');
    var fsat = gui.addFolder('saturation');
    fsat.add(colorControl, 'satMin', 0, 100);
    fsat.add(colorControl, 'satMax', 0, 100);

    var fbright = gui.addFolder('brightness');
    fbright.add(colorControl, 'brightMin', 0, 100);
    fbright.add(colorControl, 'brightMax', 0, 100);

    monosetter.onChange(function(value) {
        if(colorControl.mono) { colorMono = 30;}
        else { colorMono = 180;}
        return colorMono;
    });
}

function draw() {
    console.log(colorMono);
    fill(colorSetter.hueSetter, colorSetter.satSetter, colorSetter.brightSetter);
    rect(0,0,windowWidth/2, windowHeight);
    fill(colorSetter.hueSetter - colorMono, colorSetter.satSetter, colorSetter.brightSetter);
    rect(windowWidth/2,0,windowWidth/2, windowHeight);
    colorSetter.hueSetter = map(sin(incrementer), -1, 1, 0, 360);
    colorSetter.satSetter = map(sin(incrementer), -1, 1, colorControl.satMin, colorControl.satMax);
    colorSetter.brightSetter = map(sin(incrementer), -1, 1, colorControl.brightMin, colorControl.brightMax);
    incrementer += 0.002;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
