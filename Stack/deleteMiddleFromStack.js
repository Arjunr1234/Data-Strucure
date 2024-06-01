class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
    
  }
}

class Stack{
     constructor() {
        this.top = null;
        this.size = 0;
      
     }

    isEmpty(){
      return this.size === 0
    }

    push(element){
        const node = new Node(element);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop(){
      if(this.isEmpty()){
        return "Stack is empty!!"
      }else{
        const data = this.top.value;
        this.top = this.top.next
        this.size--;
        return data
      }

    }

    peek(){
      if(this.isEmpty()){
        return null
      }else{
        return this.top.value
      }
    }

    display(){
      if(this.isEmpty()){
        console.log("Stack is empty!!");
      } else{
        let current = this.top;
        let printValues = ''
        while(current){
          printValues += `${current.value} `;
          current = current.next
          
        }
        console.log(printValues);
      }

      
    }

    deleteCenter(){
      if(this.isEmpty()){
         console.log("Stack is empty!!!");
         return null
      }
       const tempStack = new Stack()
       const middleIndex = Math.floor(this.size/2);
       let count = 0;

       while(count !== middleIndex){
          tempStack.push(this.pop());
          count++;
       }
       this.pop();
       while(!tempStack.isEmpty()){
          this.push(tempStack.pop())
       }

    }

   
    deleteMiddle() {
      if (this.isEmpty()) {
          console.log("Stack is empty!!");
          return;
      }

      const tempStack = new Stack();
      const middleIndex = Math.floor(this.size / 2);
      let count = 0;

      while (count !== middleIndex) {
          tempStack.push(this.pop());
          count++;
      }

      // Skip the middle element
      this.pop();

      while (!tempStack.isEmpty()) {
          this.push(tempStack.pop());
      }
  }

}

const stack = new Stack();
//console.log(stack.isEmpty());
stack.push(1);
stack.push(2)
stack.push(3)
stack.push(4);
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.push(9)
//stack.deleteMiddle();
stack.deleteCenter()




stack.display()
console.log("This is peek: ",stack.peek());