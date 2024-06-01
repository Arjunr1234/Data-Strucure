function binarySearch(arr, target, leftIndex = 0, rightIndex = arr.length -1) {
    if(leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) /2) 
    if(target === arr[middleIndex]) {
        return middleIndex
    } 
    if(target < arr[middleIndex]) {
        return binarySearch(arr, target, leftIndex, middleIndex-1)

    } else {
        return binarySearch(arr, target, middleIndex +1, rightIndex)
    }
}



console.log(binarySearch([2,3,4,6,7],3));