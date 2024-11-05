function persistence(num) {
    strnum= num.toString().split('')
    real = strnum.map(Number)
    temp = 1
    count = 0
    while(real.length != 1){
    for( x of real){
       temp = temp * x
    }
    strnum= temp.toString().split('')
    real = strnum.map(Number)
    temp=1
      count++
    }
  
     return count
  }