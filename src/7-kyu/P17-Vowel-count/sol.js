function getCount(str) {
    arr = str.split('')
    count=0
    dict = ['a','e','i','o','u']
    for (let x of arr) {
      if (dict.includes(x)){
        count++
      }
    }
    return count
  }