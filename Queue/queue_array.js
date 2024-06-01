class Queue{
   constructor() {
    this.item = []
    
   }

   enqueue(element){
     this.item.push(element);
   }

   dequeue(element){
     return this.item.shift();
   }

   isEmpty(){
    return this.item.length === 0;
   }

   peek(){
      if(!this.isEmpty()){
        return this.item[0]
      }
      return null;
   }

   size(){
     return this.item.length
   }

   print(){
     console.log(this.item.toString());
   }


}
const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty());
queue.print();
console.log();
