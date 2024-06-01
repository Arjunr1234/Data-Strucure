class Stack{
   constructor() {
    this.items = []
    
   }

   push(element){
      this.items.push(element)
   }

   pop(){
    this.items.pop()
   }

   peek(){
    return this.items[0]
   }

   isEmpty(){
     return this.items.length === 0
   }

   size(){
     return this.items.length;
   }

   print(){
    if(this.isEmpty()){
      console.log("Stack is empty!!")
      return null;
    }
   
    console.log(this.items);
   }


}

const stack = new Stack();
stack.print();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4);
stack.pop()
stack.print();
console.log(stack.peek());