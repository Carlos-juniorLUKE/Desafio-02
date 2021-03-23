function getRandom(min, max) {  
  return Math.random() * (max - min) + min;
}

let largura = window.innerWidth;
let altura = window.innerHeight;
let ball, mySquare;
let lua ;
let x, y;

function setup () {
  background(220); 
  createCanvas(720, 400);
  x = width / 2;
  y = height;
  ball = new Ball(50, 75, 10, 10, 1);
  ball1 = new Ball1(120, 120, 10,10, 1);
  ball2  = new Ball2(150, 50, 10, 10, 1)
  ball3  = new Ball3(250, 90, 10, 10, 1)
  ball4  = new Ball4(600, 70, 10, 10, 1)
  ball5  = new Ball5(800, 90, 10, 10, 1)
  ball6  = new Ball6(450, 90, 10, 10, 1)
  ball7  = new Ball7(550, 120, 10, 10, 1)
  ball8  = new Ball8(400, 14, 10, 10, 1)
  
  lua = new Lua(350, 100, 100, 100,1)
}  

function draw() {
  background(29, 40, 151);
  ball.render();    
  ball1.render();
  ball2.render();
  ball3.render();
  ball4.render();
  ball5.render();
  ball6.render();
  ball7.render();
  ball8.render();

  lua.render();
  
  ball.shiny();
  ball1.shiny();
  ball2.shiny();
  ball3.shiny();
  ball4.shiny();
  ball5.shiny();
  ball6.shiny();
  ball7.shiny();
  ball8.shiny();
  
    stroke(200);
  fill(255);
  ellipse(x, y, 30, 120);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

class Shape {
   constructor(x, y, width, height){
    this.x = x;    
    this.y = y;
    this.width = width;
    this.height = height;   
  }
    
  growt (growthTax){     
    this.width = this.width + growthTax;
    this.height = this.height + growthTax;
  }
  
}


class Ball extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball1 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball2 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball3 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball4 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball5 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball6 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball7 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(256)
  }  
}

class Ball8 extends Shape {
  constructor(x, y, width, height, velocity){  
    super(x, y, width, height);
    this.velocity = velocity;    
  }
  
  moveX () {      
    if(this.x == largura){
      this.velocity = this.velocity * -1;
    }
    this.x = this.x + this.velocity;   
  }  
  
  moveY (){
    if(this.y == altura){
      this.velocity = this.velocity * -1;
    }
    this.y = this.y + this.velocity;   
  }
  
  shiny(){    
    noStroke();
    this.width = getRandom(3, 10);
    this.height = this.width;
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(255,215,0)
  }  
}



class Lua extends Shape {
  constructor(x, y, width, height){  
    super(x, y, width, height);
  }
  
  render(){
    ellipse(this.x , this.y, this.width, this.height);
    fill(200)
}

}
