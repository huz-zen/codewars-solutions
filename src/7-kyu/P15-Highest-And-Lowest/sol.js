function highAndLow(numbers){
    num = numbers.split(' ').map(Number)
    largest=num[0]
    smallest=largest
    for (const x of num){
       if (x>largest){
         largest = x
       }
       if (x<smallest){
         smallest = x
       }  
    }
    let ans = largest.toString() + ' '+ smallest.toString()
    return ans
  
  }