function moveZeros(arr) {
    console.log(arr)
  //   lenn = arr.length()
     let count = 0
  //   for (let i=0;i<lenn;i++){
     let i = arr.indexOf(0)
      while(i!=-1){
        arr.splice(i,1)
        count+=1
        console.log(arr)
        i = arr.indexOf(0)
        console.log(count)
      }
    for (let j = 0;j<count;j++){
      arr.push(0)
    }
    
  return arr}
  //     if (arr[i] === 0){
  //     count+=1;
  //     arr.splice(i,1)}
  //     console.log(arr)
      