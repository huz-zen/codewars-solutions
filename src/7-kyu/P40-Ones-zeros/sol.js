const binaryArrayToNumber = arr => {
    arr.reverse()
    i=0
    sum = 0
    console.log(arr)
    for (x of arr){
      sum+=(x*Math.pow(2,i))
      i++
      
    }
    return sum;
  };