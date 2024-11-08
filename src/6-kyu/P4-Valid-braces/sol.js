function validBraces(braces){
    let stack = []
      for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
          stack.push(braces[i])
        } else{
          if(stack.length === 0) return false
          let lastValue = stack[stack.length-1]
          if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
          {
            stack.pop()
          } else {
            break;
          }
        }
      }
      return stack.length === 0
    }