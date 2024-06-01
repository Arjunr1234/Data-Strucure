class MinHeap{
     constructor() {
        this.heap = [];
     }

     addValue(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
     }

     shiftUp(index){
        let parent = Math.floor((index-1)/2);
        while(index > 0 && this.heap[parent] > this.heap[index]){
           [this.heap[parent], this.heap[index]] = [
              this.heap[index], this.heap[parent]
           ]
           index = parent;
           parent = Math.floor((index-1)/2)
         }
       }

     remove(){
       const value = this.heap[0];
       this.heap[0] = this.heap.pop();
       this.shiftDown(0);
       return value;
     }
     shiftDown(index){
       let left = 2*index+1;
       let right = 2*index+2;
       let smallest = index;
       if(left < this.heap.length && this.heap[smallest] > this.heap[left]){
          smallest = left;
       }
       if(right < this.heap.length && this.heap[smallest] > this.heap[right]){
          smallest = right;
       }

       if(smallest !== index){
           [this.heap[smallest], this.heap[index]] = [
             this.heap[index], this.heap[smallest]
           ]
           this.shiftDown(smallest)
       }
     }

     print(){
      console.log(this.heap.join(" "));
     }
}

const heap = new MinHeap();

heap.addValue(2)
heap.addValue(6)
heap.addValue(3)
heap.addValue(9);
heap.remove()
heap.print()