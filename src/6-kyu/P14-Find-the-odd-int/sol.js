function findOdd(A) {

    let  counter = {};
  
  for (x of A){
    if (counter[x]){
      counter[x]++
    }else{
      counter[x] = 1
    }
  
  }
    console.log(counter)
    for(x in counter){
      console.log(x)
      if(counter[x]%2!=0){
      return parseInt(x)
    }
  }
   }