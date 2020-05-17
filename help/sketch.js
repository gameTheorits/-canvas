var database
var drawing = [];
var cp =[];
var canvas
function setup() {
  canvas = createCanvas(400, 400);
  canvas.mousePressed(sp)
 
  database = firebase.database();
}
function sp(){
  cp = []
  drawing.push(cp);
}


function draw() {
  background(0);
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    };
    cp.push(point);
  }
  //console.log(drawing[]);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  for(i = 0;i < drawing.length;i++){
    var line = drawing[i];
    beginShape();
    for(j = 0;j < line.length;j++){

    
    vertex(line[j].x,line[j].y);
    }
    endShape();
  }
  
}