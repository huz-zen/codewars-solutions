function XO(str) {
    //code here
  str =str.toLowerCase()
  console.log(str)
  countx=0
  counto=0
  for( const a of str){
    console.log(a)
    if (a ==='x'){
      countx+=1}
      else if(a ==='o'){
        counto+=1
      }
    }
  
  return counto===countx
}