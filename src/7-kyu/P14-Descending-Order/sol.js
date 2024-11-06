function descendingOrder(n){
    let ans = n.toString().split('')
    a= ans.sort().reverse().map(Number).join('')
      return parseInt(a)
    }