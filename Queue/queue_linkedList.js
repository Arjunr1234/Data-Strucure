class Node{
  constructor(value) {
     this.value = value;
     this.next = null;
    
  }
}

class Queue{
    constructor() {
       this.front = null;
       this.rear = null;
       this.size = 0;
      
    }

    isEmpty(){
      return this.size === 0;
    }


    enqueue(element){
      const node = new Node(element)
       if(this.isEmpty()){
          this.front = node;
          this.rear = node
       }else{
          this.front.next = node;
          this.front = node;
       }
       this.size++
    }

    dequeue(){
      if(this.isEmpty()){
        return null
      }else{
        const removeValue = this.rear.value
        this.rear = this.rear.next;
        this.size--
        return removeValue

      }
      
    }

    peek(){
      if(this.isEmpty()){
        return null
      }
      return this.rear.value

    }

    print(){
       if(this.isEmpty()){
         console.log("Queue is empty!!!");
       }else{
         let curr = this.rear;
         let printValues = '';
         while(curr){
          printValues += `${curr.value} `;
          curr = curr.next;
         }
         console.log(printValues);
       }
    }
}

const queue = new Queue();

console.log(queue.isEmpty());;
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.dequeue());
console.log(queue.peek());
queue.print()