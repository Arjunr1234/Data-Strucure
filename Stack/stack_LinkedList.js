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

    reverseString(str){
          
        for(let i=0; i<str.length; i++){
           this.push(str[i])
        }
        let rev = '';
        while(!this.isEmpty()){
          rev += this.pop()
        }
        return rev
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

}

const stack = new Stack();
//console.log(stack.isEmpty());
stack.push(1);
stack.push(2)
stack.push(3)
stack.push(4)
console.log("This is poped: ",stack.pop())
stack.display()
console.log("This is peek: ",stack.peek());

const reverse = new Stack();
console.log(reverse.reverseString("arjun"));