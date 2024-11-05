function accum(s) {
    a = []
     s= s.toLowerCase()
     for(let i =0;i<s.length;i++){
       for(let j =0 ; j<i+1;j++){
          if (j===0){
            a.push(s[i].toUpperCase())
          }else{
         a.push(s[i])}
       }
       if (i===s.length-1){
         break
       }
       a.push('-')
     }
     return a.join('')
   }