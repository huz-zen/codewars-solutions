function solution(str, ending){
    // TODO: complete
    len = ending.length
    part = str.slice(-len)
    
    if (ending === ''){
       return true
     }
    
     return part === ending
  }