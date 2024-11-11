const sequenceSum = (begin, end, step) => {
    sum=0
    if(begin>end){
      return 0
     }
    for(var i = begin;i<=end;i=i+step){
      
      sum+=i
    }
    return sum
   
  };