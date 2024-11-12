function oddOrEven(array) {
    let sum= 0
     for (x of array){
       sum+=x
     }
    return sum%2===0?'even':'odd'
  }