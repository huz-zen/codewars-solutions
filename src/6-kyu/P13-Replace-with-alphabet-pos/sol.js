function alphabetPosition(text) {
    a=text.toLowerCase()
    let result = []
    let strArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    a=a.split('')
    for (x of a){
      if(/[a-z]/.test(x)){
        let s = x.charCodeAt(0)-96;
        result.push(s);
        console.log(x)
    }}
    return result.join(' ');
  }