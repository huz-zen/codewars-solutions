function openOrSenior(data){
    console.log(data.length)
    var ans = []
   for(var x of data){
     (x[0]>=55 && x[1]>7) ? ans.push('Senior'):ans.push('Open') 
     }
    return ans
  }