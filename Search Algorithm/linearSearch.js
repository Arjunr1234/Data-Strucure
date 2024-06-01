function linearSearch(array, target){
        for(let i=0; i<array.length; i++){
          if(array[i] === target){
            return i
          }
        }
        return -1
}

console.log(linearSearch([3, 2, 6,  8, 5, 12, 23, 123],6))
console.log(linearSearch([3, 2, 6,  8, 5, 12, 23, 123],23))
console.log(linearSearch([3, 2, 6,  8, 5, 12, 23, 123],4544))

