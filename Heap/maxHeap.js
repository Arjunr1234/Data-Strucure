class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  shiftUp(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  shiftDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.shiftDown(largest);
    }
  }

  remove() {
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return max;
  }

  print() {
    console.log(this.heap.join(""));
  }
}

const heap = new MaxHeap();
heap.insert(2);
heap.insert(5);
heap.insert(32);
heap.insert(12);
heap.insert(35);


heap.print();