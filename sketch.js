let t
let b 
let col
let x = 0, y = 0, xV = 3, yV = 5


function setup() {
 createCanvas(400, 400);
  
 t=select('#title')
 b = select('#blurb')
  

}

function draw() {
 background(0,100,200);
 ellipse(50,50,100)
 
 t.position(x,y)
  
 b.style('color', col)

  if(x>windowWidth){
    xV = -xV
  }
   if(y>windowHeight){
    yV = -yV
  }
   if(x<0){
    xV = -xV
  }
   if(y<0){
    yV = -yV
  }

  
  x+=xV
  y+=yV
}

function mousePressed(){
  col =   color(random(255), random(255),random(255))
  
}