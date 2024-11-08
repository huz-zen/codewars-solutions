function filter_list(l) {

    let ans = []
    for (x of l ){
      if (typeof(x) === 'number'){
        ans.push(x)
      }
    }
    return ans
  }