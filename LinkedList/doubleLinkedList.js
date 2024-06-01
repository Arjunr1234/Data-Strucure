class Node {
  constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
  }
}

class doublyLinkedList {
  constructor() {
      this.head = null
      this.tail = null
      this.size = 0
  }

  isEmpty() {
      return this.size === 0
  }

  getSize() {
     return this.size
  }

  append(value) {
      let newNode = new Node(value)
      if(this.isEmpty()) {
          this.head = newNode
          this.tail = newNode
      } else {
          this.tail.next = newNode
          newNode.prev = this.tail
          this.tail = newNode
      }
      this.size++
  }

  prepend(value) {
      let newNode = new Node(value) 
      if(this.isEmpty()) {
          this.head = newNode
          this.tail = newNode
      } else {
          newNode.next = this.head
          this.head.prev = newNode
          this.head = newNode
      }
      this.size++
  }

  insert(value, index) {
      if(index < 0 || index > this.size) {
          return null
      }
      if(index == 0) {
          this.prepend(value);
      } else {
          let curr = this.head
          for (let i = 0; i < index -1; i++) {
              curr = curr.next
              
          }
          let newNode = new Node(value)
          newNode.next = curr.next;
          newNode.prev = curr; 
          curr.next.prev = newNode
          curr.next = newNode
      }
      this.size++
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
        return null; // Index out of bounds.
    }

    let removedValue;

    if (index === 0) {
        // Remove from the beginning.
        removedValue = this.head.value;
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        }
        if (this.size === 1) {
            this.tail = null;
        }
    } else if (index === this.size - 1) {
        // Remove from the end
        removedValue = this.tail.value;
        this.tail = this.tail.prev;
        this.tail.next = null;
    } else {
        // Remove from the specified index
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        removedValue = current.value;
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }

    this.size--;
    return removedValue;
}
 
  removeValue(value) {
      let curr =this.head
      while(curr) {
          if(curr.value === value) {
              if(curr.prev) {
                  curr.prev.next = curr.next
              } else {
                  this.head = curr.next
              }    
              if(curr.next) {
                  curr.next.prev = curr.prev
              } else {
                  this.tail = curr.prev
              }
              this.size--
              return curr.value
          }
          curr = curr.next
      }
      return null
  }

  isPalindrome() {
      let frontPointer = this.head
      let backPointer = this.tail
      while(frontPointer != backPointer ) {
          if(frontPointer.value != backPointer.value) {
              return false
          }
          frontPointer = frontPointer.next
          backPointer = backPointer.prev
      }
      return true
  }

  print() {
      let list = ''
      let curr = this.head
      while(curr) {
          list += `${curr.value} `
          curr = curr.next
      }
      console.log(list);
  }

}

let list = new doublyLinkedList()


list.append(10)
list.append(20)
list.append(30)
list.append(20)
list.append(10)
// list.append(10)

console.log('palindrome check', list.isPalindrome());

list.print()

console.log("list is empty", list.isEmpty());
console.log("list size", list.getSize());