function minRepeatingCharacterDifference(text) {
    //     let  dict = {}
    //     len= text.length
    //     min= len
    //     min_ind=0
    //     for (var i = 0 ; i<text.length ;i++){
    //       if (!(text[i] in dict)){
    //         dict[text[i]]= [i,1,text.length]
    //       }
          
    //       else {
    //         if(dict[text[i]][1] === 1){
    //           dict[text[i]][1]++
    //           dict[text[i]][2] = i - dict[text[i]][0]
    //         }
    //     }
    //     if (dict[text[i]][2]<min && dict[text[i]][1]>1){
    //      min = dict[text[i]][2]
    //         min_ind=i
    //          }
    //      }
    //      if (min===len){
    //        return null
    //      }
       
    //   let ans = [] 
    //   ans.push(min)
    //    ans.push(text[min_ind])
    // return ans}
    
    
        let dict = {}; 
        let minDistance = text.length; 
        let resultChar = null;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            if (!(char in dict)) {
                dict[char] = [i, 1];
            } else {
                const [firstIndex, occurrenceCount] = dict[char];
                const distance = i - firstIndex;
    
                if (distance < minDistance) {
                    minDistance = distance;
                    resultChar = char;
                }
                
                dict[char] = [i, occurrenceCount + 1];
            }
        }
    
        return resultChar ? [minDistance, resultChar] : null;
    }