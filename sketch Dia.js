
var leftX = 45;
var rightX = 370;
var sunRadius = 100;

// Configuração da cena
function setup() {
  createCanvas(innerWidth, innerHeight);
}

draw = function() {
    background(184, 236, 255);
    noStroke();
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
};
