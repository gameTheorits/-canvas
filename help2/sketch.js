var database
var drawing = [];
var cp =[];
var isDraw = false
var canvas
var save;
function setup() {
  canvas = createCanvas(400, 400);
  canvas.mousePressed(sp)
 canvas.mouseReleased(ep)
  database = firebase.database();
  save = createButton("save");
  save.mousePressed(saveDraw);
 
}
function sp(){
  isDraw = true
  cp = []
  drawing.push(cp);
}
function ep(){
  isDraw = false
}

function draw() {
  background(0);
  if(isDraw === true){
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
function saveDraw(){
  var ref = database.ref('drawings');
  var data = {
    name : "your Dawing",
    drawing : drawing
  }
  var result = ref.push(data,sent);
  console.log(result.key);
  function sent(status){
    console.log(status);
  }
}
