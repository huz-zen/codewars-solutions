function isItANum(str) {
    // your code here;
      regex = /^0[0-9]{10}$/
       str = str.replace(/\D/g, "");
      if(regex.test(str)==true){
        return str
        
      }else{
        return "Not a phone number"
      }
    }