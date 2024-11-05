// return masked string
function maskify(cc) {
    let sized= cc.length;
    neww = cc.split("");
      console.log(sized);
      console.log(neww);
      let index=0;
    if (sized>4)  {
    index= sized-4;
       for (let i=0;i<index;i++){
        neww[i]="#";
      }
      return neww.join('');
      }
    return cc;
    }
    
    //  }