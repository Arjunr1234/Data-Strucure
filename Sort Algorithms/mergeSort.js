function mergeSort(array){
    if(array.length < 2)
    return array
  
    let mid = Math.floor(array.length/2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray){
     const sortedArr = [];
     while(leftArray.length && rightArray.length){
         if(leftArray[0] <= rightArray[0]){
            sortedArr.push(leftArray.shift())
         }else{
            sortedArr.push(rightArray.shift())
         }
     }
     return [...sortedArr, ...leftArray, ...rightArray]
}

console.log(mergeSort([8, 4, 1, -98, 5, 76, 2]));

