function zeros (n) {
    x = Math.log(n) / Math.log(5);
    sum = 0
    for(var i = 1 ;i<=x;i++){
      sum+=Math.floor(n/Math.pow(5,i))}
  
  return sum
  }