function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(220);
    translate(0, height);  //moves the origin to bottom left
    
    
    scale(1, -1);  //flips the y values so y increases "up"
    stroke('blue');
    
    //Taking Points
    
    X1 = 50;
    Y1 = 50;
    X2 = 300;
    Y2 = 220;
    
    let x,y,m;
    let dx,dy,p;
    if(X1<X2){
      x = X1;
      y = Y1;
    }
    else{
      x = X2;
      y = Y2;
    }
    point(x,y);
    
    
    //slope
    m = (Y2 - Y1) / (X2 - X1);
    console.log("Slope:", m);
    dy = Math.abs(Y2 - Y1);
    dx = Math.abs(X2 - X1);
  
    // |m| < 1
    if(Math.abs(m) < 1){
      console.log('|Slope| < 1');
      pk = 2 * dy - dx;
      
      for (let i = 0; i < abs(dx); i++){
        x = x + 1;
        if(pk < 0){
          pk = pk + 2 * dy;
        }
        else{
          if(m < 0){
            y = y - 1;
          }
          else {
            y = y + 1;
          }
          pk = pk + 2 * dy - 2 * dx;
        }
        point(x,y);
      }
    }
    
    // |m| >= 1 
    else{
      console.log('|Slope| >= 1');
      pk = 2 * dx - dy;
      
      for (let j = 0; j < abs(dy); j++){
        if(m < 0){
          y = y -1;
        }
        else{
          y = y + 1;
        }
        if(pk < 0){
          pk = pk + 2 * dx;
        }
        else{
          x = x + 1;
          pk = pk + 2 * dx - 2 * dy;
        }
        point(x,y);
      }
    }
    
    
    noLoop();
  }