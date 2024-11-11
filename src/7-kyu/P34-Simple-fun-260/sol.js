function permutationShift(permutation) {
    //coding and coding..
   ans =[]
     for(var i=0;i<permutation.length;i++){
     temp= permutation[i]-i
    ans.push(temp)
       }
      
     return Math.max(...ans)-Math.min(...ans)
    
   }