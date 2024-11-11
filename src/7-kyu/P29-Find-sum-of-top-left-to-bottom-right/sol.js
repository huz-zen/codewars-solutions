function diagonalSum(matrix){
    //...
    sum = 0
    j=0
    for (i of matrix){
      sum+=i[j]
      j++
    }
    return sum
  }