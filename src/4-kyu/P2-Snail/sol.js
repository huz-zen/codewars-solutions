const snail = function(array) {
    let ans = [];

    while (array.length) {
        ans = ans.concat(array.shift());
        
        for (let i = 0; i < array.length; i++) {
            ans.push(array[i].pop());
        }
        
        if (array.length) {
            ans = ans.concat(array.pop().reverse());
        }
        
        for (let i = array.length - 1; i >= 0; i--) {
            ans.push(array[i].shift());
        }
    }

    return ans;
};


//  let ans= array[0]
// [[1, 2, 3, 4, 5], 
// [6, 7, 8, 9, 10], 
// [11, 12, 13, 14, 15]
//  n=array[0].length
//   if(n===0){
//     return []
//   }
//   for(let i=1;i<n-1;i++){
//     ans.push(array[i][n-1])
//    }
//   for(let i=n-1;i>=0;i--){
//     ans.push(array[n-1][i])
//    }
  
//   for(let i=n-2;i>0;i--){
//     for(let j =0;j<n-1;j++){
//     ans.push(array[i][j])
//   }}
//   return ans}
  