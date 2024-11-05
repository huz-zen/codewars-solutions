function dnaStrand(dna){
    let dict = {'C':'G','G':'C','A':'T','T':'A'}
      neww = dna.split('')
      len = dna.length
   
     for (let i=0 ; i<len;i++){  
       if (dict[neww[i]] != undefined){
         neww[i] = dict[neww[i]];
       }}
      
      return (neww.join(''));
     }