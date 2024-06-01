function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n - 1 / 2) ; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }

}
let arr = [2, 5,78, 32, 65,12, 35];
heapSort(arr);
console.log(arr);