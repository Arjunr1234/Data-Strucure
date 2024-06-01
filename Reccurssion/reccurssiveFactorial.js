function reccurssiveFact(n){
      if(n === 0){
        return 1
      }
      return n * reccurssiveFact(n-1)
}

console.log(reccurssiveFact(3));
console.log(reccurssiveFact(6));
console.log(reccurssiveFact(5));

function reccurssiveFactdd(n){
     if(n===0)
     return 1
     return n*reccurssiveFactdd(n-1)
}
console.log(reccurssiveFactdd(5));

function fact(n){
    if(n===0){
      return 1
    }
    return n * fact(n-1)
}
console.log(fact(6))