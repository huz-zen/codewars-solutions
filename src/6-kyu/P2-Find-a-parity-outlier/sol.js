function findOutlier(integers){
    let evens = [];
    let odds = [];
    for (let i = 0; i < integers.length; i++) 
    {
        if ((integers[i] % 2) == 0) 
        {
            evens.push(integers[i]);
        } 
        else 
        {
            odds.push(integers[i]);
        }
    }
    var elen = evens.length;
    var olen = odds.length;
 
    if (elen > olen)
    {
        return odds[0];
    } 
    else 
    {
        return evens[0];
    }
 }
   
 //   for (let i=0;i<integers.length;i++){
 //    if (integers[i]%2 === 0 ){
 //      even_ind.push(i) 
 //    }
 //    else{odd_ind.push(i)}
 //   }
  
 //   if (odd_ind.length < even_ind.length){
 //   return integers[odd_ind]}
 //   else {
 //   return integers[even_ind]}}
 // //   }}
 
 // //   if even
 // //    return odd}
 // //   if (even.length === 1){
 // //     return even.toString()
 // //   }
 //   else odd.toString()
   
 // }