class Stack {
  constructor() {
      this.items = {};
      this.top = 0;
  }

  push(element) {
      this.items[this.top] = element;
      this.top++;
  }

  pop() {
      if (this.isEmpty()) {
          console.log("Stack is empty. Cannot pop.");
          return;
      }
       this.top--;
       const poppedItem = this.items[this.top];
       delete this.items[this.top];
       return poppedItem;
  }

  isEmpty() {
      return this.top === 0;
  }

  peek() {
      if (this.isEmpty()) {
          console.log("Stack is empty. Cannot peek.");
          return;
      }
      return this.items[this.top - 1];
  }

  size() {
      return this.top;
  }

  print() {
      console.log(this.items);
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: { '0': 10, '1': 20, '2': 30 }

console.log("Popped item:", stack.pop()); // Output: Popped item: 30
stack.print(); // Output: { '0': 10, '1': 20 }
console.log(stack.size());
