function isPrime(number) {
    let isPrime = true;
    
    if (number === 1) {
        return false
    }
      if (number <=0){
        return false
      }
    
    else if (number > 1) {
      
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
      return isPrime;}}