function reverseWords(str) {
    ans = str.split(' ')
      ans2= []
      for (x of ans){
        ans2.push(x.split('').reverse().join(''))
      }
      return ans2.join(' ')
    }