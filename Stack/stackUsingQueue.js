class Node{
  constructor(value){
      this.value = value;
      this.next = null;

  }
}
class Queue{
  constructor(){
      this.front = null;
      this.rear = null;
      this.size = 0;

  }
  enqueue(value){
      const newNode = new Node(value);
      
      if(this.front==null){
          this.front = newNode;
         
      }else{
          this.rear.next = newNode
      }
      this.rear = newNode;
      
      this.size++
  }
  dequeue(){
      const poppedValue = this.front.value;
      this.front = this.front.next;
      if(this.front==null){
          this.rear = null;
      }
      this.size--;
      return poppedValue
  }
  peek(){
      return this.front.value
  }
  isEmpty(){
      return this.size==0
  }
  reverse(){
      let newNode = null;
      let previous = null;
      let current = this.front;

      while(current){
          newNode = current.next;
          current.next = previous
          previous= current;
          current = newNode
      }
      this.tail = this.front;
      this.front = previous;
      
  }
  print(){
      let current = this.front;
      while(current){
          console.log(current.value);
          current = current.next;
      }
  }
}

class Stack{
  constructor(){
      this.queue = new Queue()
  }

  push(value){
      this.queue.enqueue(value);

      const size = this.queue.size;
      for(let i =0;i<size - 1;i++){
          this.queue.enqueue(this.queue.dequeue())
      }
  }
  pop(){
      return this.queue.dequeue()
  }
}

const stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop());

