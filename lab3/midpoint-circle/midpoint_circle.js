function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(220);
    stroke('blue');
    textSize(25);
    text('Output of midpoint circle algorithm',10,30);
  
    midPointCircle(300,300,100);
    noLoop();
  }
  
  function midPointCircle(cx, cy, r){
    var x = 0;
    var y = r;
    
    var p = 5/4 - r;
    
    while(x < y){
      if (p < 0){
        x = x + 1;
        p = p + 2 * x + 1;
      }
      else{
        x = x + 1;
        y = y - 1;
        p = p + 2 * x + 1 - 2 * y;
      }
      drawSymmetry(x,y,cx,cy);
    }
  }
  
  function drawSymmetry(x, y, cx, cy){
     point(x + cx, y + cy);
     point(-x + cx, y + cy);
     point(x + cx, -y + cy);
     point(-x + cx, -y + cy);
     point(y + cx, x + cy);
     point(-y + cx, x + cy);
     point(y + cx, -x + cy);
     point(-y + cx, -x + cy);
  }