function reccurssiveFibo(n){
  if(n<2){
    return n
  }
  return reccurssiveFibo(n-1)+reccurssiveFibo(n-2)
}

function recFibo(n){
  if(n<2){
    return n
  }
  return recFibo(n-1) + recFibo(n-2)
}
console.log(recFibo(6));

console.log(reccurssiveFibo(3));
console.log(reccurssiveFibo(6));
console.log(reccurssiveFibo(0));

