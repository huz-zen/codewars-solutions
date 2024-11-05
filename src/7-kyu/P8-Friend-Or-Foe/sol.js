function friend(friends){
    //your code here
    let neww = []
    for (const x of friends){
      if( x.length === 4 )
        {neww.push(x);}
    }
    return neww
  }