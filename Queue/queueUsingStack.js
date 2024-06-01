class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.top = null;
      this.size = 0;
  }

  push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
  }

  pop() {
      if (this.isEmpty()) {
          return "Stack is empty";
      }
      const value = this.top.value;
      this.top = this.top.next;
      this.size--;
      return value;
  }

  peek() {
      return this.isEmpty() ? "Stack is empty" : this.top.value;
  }

  isEmpty() {
      return this.size === 0;
  }

  getSize() {
      return this.size;
  }

  print(){
    if(this.isEmpty()){
      console.log("Stack is empty")
    }else{
       let curr = this.top;
       let printValues = '';
       while(curr){
         printValues += `${curr.value} `;
         curr = curr.next;
       }
       console.log(printValues);
    }
 }

}


class Queue {
  constructor() {
      this.stackEnqueue = new Stack();
      this.stackDequeue = new Stack();
  }

  enqueue(value) {
      this.stackEnqueue.push(value);
  }

  dequeue() {
      if (this.stackDequeue.isEmpty()) {
          if (this.stackEnqueue.isEmpty()) {
              return "Queue is empty";
          }
          while (!this.stackEnqueue.isEmpty()) {
              this.stackDequeue.push(this.stackEnqueue.pop());}

              const poppedValue = this.stackDequeue.pop()

          while (!this.stackDequeue.isEmpty()) {
              this.stackEnqueue.push(this.stackDequeue.pop());
          }
          return poppedValue;
          
      }
      
  }

  peek() {
      if (this.stackDequeue.isEmpty()) {
          if (this.stackEnqueue.isEmpty()) {
              return "Queue is empty";
          }
          while (!this.stackEnqueue.isEmpty()) {
              this.stackDequeue.push(this.stackEnqueue.pop());}

              const poppedValue = this.stackDequeue.peek()

          while (!this.stackDequeue.isEmpty()) {
              this.stackEnqueue.push(this.stackDequeue.pop());
          }
          return poppedValue;
          
      }
  }

  isEmpty() {
      return this.stackEnqueue.isEmpty() && this.stackDequeue.isEmpty();
  }

  getSize() {
      return this.stackEnqueue.getSize() + this.stackDequeue.getSize();
  }

  print(){
    this.stackEnqueue.print()
  }
  
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(7);
queue.enqueue(3);
queue.enqueue(4);
queue.print()
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 

console.log(queue.peek());