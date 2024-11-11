Array.prototype.pops = function() {
    for (let i = this.length - 1; i >= 0; i--) {
      if (this.hasOwnProperty(i)) { 
        const lastValue = this[i];
        this.length = i;            
        return lastValue;
      }
    }
    this.length = 0;
    return undefined;
  };
  
  Array.prototype.shifts = function() {
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i)) { 
        const firstValue = this[i];
        this.splice(0, i + 1);      
        return firstValue;
      }
    }
    this.length = 0;
    return undefined;
  };