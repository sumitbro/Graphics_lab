function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    stroke('blue');
    textSize(25);
    text('Output of midpoint ellipse algorithm',10,30);
  
  
    midPointEllipse(100,200,60,50);
    noLoop();
  }
  
  function midPointEllipse(cx, cy, rx, ry){
    
    //region 1
    var x = 0;
    var y = ry;
    
    var p = ry * ry - rx * rx * ry + rx * rx / 4;
    
    while ((2 * ry * ry * x) < (2 * rx * rx * y)) {
       if (p < 0) {
         x = x + 1;
         p = p + 2 * ry * ry * x + ry * ry;
       } else {
         x = x + 1;
         y = y - 1;
         p = p + 2 * ry * ry * x - 2 * rx * rx * y + ry * ry;
       }
       drawSymmetry(x, y , cx, cy);
    }
    
    //region 2
    
    p = ry * ry * (x + 0.5) * (x + 0.5) + rx * rx * (y - 1) *         (y -1) - rx * rx * ry * ry;
    
    while (y != 0) {
       if (p < 0) {
         x = x + 1;
         y = y - 1;
         p = p + 2 * ry * ry * x - 2 * rx * rx * y + rx * rx;
       } 
       else{
         y = y - 1;
         p = p - 2 * rx * rx * y + rx * rx;
       }
       drawSymmetry(x, y , cx, cy);
     }
  }
  
  function drawSymmetry(x, y, cx, cy){
     point(x + cx, y + cy);
     point(-x + cx, y + cy);
     point(x + cx, -y + cy);
     point(-x + cx, -y + cy);
  }