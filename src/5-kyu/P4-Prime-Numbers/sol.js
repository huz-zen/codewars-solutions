function isPrime(number) {
    let  isPrime = true
     if (number<=1){return false}
     for(i=2;i<=number/2;i++){
       if(number%i===0){
         isPrime=false
         break
       }
     }
     return isPrime
   }
   
   function getPrimes(start, finish) {
     let ans = []
     if(start>finish){
       temp = finish
       finish = start
       start = temp
       
     }
     while(start<=finish){
       if (isPrime(start)){
         ans.push(start)
       }
     start++}
     
     return ans
   }