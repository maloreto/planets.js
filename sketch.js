var planets = ["EARTH","VENUS","MARS","PLUTO"];
var planetSize = [120, 100, 70, 50];
var index = [0];


function setup (){
  createCanvas (windowWidth,windowHeight);
  planets;
  planetSize;
  index;
}

function draw (){
 background (0);  
 textAlign (CENTER);
 textSize(30);
 fill (0,255,0);
 stroke (0);
 strokeWeight(3);
 text ("PLANETS:" + planets[index], width/2, height/2);
 fill(0,0,250);
 ellipse (mouseX,mouseY, planetSize[index], planetSize[index]);
}

function mousePressed (){
  index++;
  
  if (index == planets.length){
    index = 0;
  }
}
