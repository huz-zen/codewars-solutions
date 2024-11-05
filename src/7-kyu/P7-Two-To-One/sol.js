function longest(s1, s2) {
    // your code
      let dist = [];
      for (let i = 0; i < s1.length; i++) {
          if (dist.includes(s1[i]) === false ) {
              dist.push( s1[i])
          }
      }
    
      for (let i = 0; i < s2.length; i++) {
          if (dist.includes(s2[i]) === false ) {
              dist.push(s2[i])
          }
      }
    
      dist.sort();
    return dist.join('')
  }