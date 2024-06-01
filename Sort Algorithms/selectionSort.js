function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
       let smallerIndex = i;

       for(let j=i+1; j<arr.length; j++){
           if(arr[smallerIndex] > arr[j])
            smallerIndex = j
       }
       if(smallerIndex !== i){
         let temp = arr[i];
         arr[i] = arr[smallerIndex];
         arr[smallerIndex] = temp;
       }
    }
    return arr
}

console.log(selectionSort([7, 4, 87, -34, -3, 3, 34]));