function rgb(r, g, b) {
    console.log(r,g,b)
    rref = r<0 ? 0: r>255 ? 255: r;
    gref = g<0 ? 0: g>255 ? 255: g;
    bref = b<0 ? 0: b>255 ? 255: b;
    
      var hex1 = Number(rref).toString(16);
      var hex2 = Number(gref).toString(16);
      var hex3 = Number(bref).toString(16);
      padding = 2
      if (hex1.length < padding) {
          hex1 = "0" + hex1;
      }
      if (hex2.length < padding) {
          hex2 = "0" + hex2;
      }
      if (hex3.length < padding) {
          hex3 = "0" + hex3;
      }
  
      return hex1.toUpperCase()+hex2.toUpperCase()+hex3.toUpperCase();
  }