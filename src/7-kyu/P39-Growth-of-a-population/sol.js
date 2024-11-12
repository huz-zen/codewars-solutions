function nbYear(p0, percent, aug, p) {
    year = 0
   ppl = p0
   while (ppl<p){
     ppl = Math.floor(ppl+(ppl*percent/100)+aug)
     year++
     console.log(year)
   }  return year
 }