function squareDigits(num){
    num=num.toString().split('').map(Number)
    for (i = 0;i<num.length;i++){
    // console.log(num[i])
      num[i]=num[i]**2
      
    }
    return parseInt(num.join(''))
  
  
  }