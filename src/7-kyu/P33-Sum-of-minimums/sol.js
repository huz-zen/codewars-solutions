function sumOfMinimums(arr) {
    sum=0
    for (x of arr){
      sum+=Math.min(...x)
    }
    return sum
  }