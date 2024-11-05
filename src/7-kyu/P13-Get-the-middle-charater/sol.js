function getMiddle(s) {
    len = s.length
    a = Math.floor((len/2)-1 )
    arr = s.split('')
    
    if (len%2===0){
      return (arr[a] + (arr[a+1]))}
    else{
      return arr[a+1]}}