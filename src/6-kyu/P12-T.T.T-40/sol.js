function nMod9(m,n){
    a = []
  
    let sum = 0
   for (var i = m; i <= n; i++) {
     a.push(i);
  }
    console.log(a,m,n)
    for (x of a){
      sum=sum+x
    }
    return (sum%9)
    
  }