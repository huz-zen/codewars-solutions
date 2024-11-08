function sumTwoSmallestNumbers(numbers) {  
    a=Math.min(...numbers) 
    const index = numbers.indexOf(a);
    numbers.splice(index, 1)
    b=Math.min(...numbers)
  //   if(a<b){
  //     diff = b+a
  //   }
  //   else{
    return (a+b)
  
  }