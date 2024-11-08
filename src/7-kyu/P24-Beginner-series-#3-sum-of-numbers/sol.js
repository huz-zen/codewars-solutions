function getSum(a, b)
{
  if (a > b) [a, b] = [b, a]; 
  
  if (a === b) {
    return a;
  }
  
  let sum = 0;
  
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  
  return sum;
}