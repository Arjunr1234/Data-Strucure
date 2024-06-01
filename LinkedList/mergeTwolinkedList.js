class Node {
  constructor(value) {
      this.value = value
      this.next = null
  }
}

class LinkedList {
  constructor() {
      this.head = null
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
      } else {
          let curr = this.head
          while(curr.next) {
              curr = curr.next
          }
          curr.next = newNode
      }
      this.size++
  }

  merge(otherList) {
      if(this.isEmpty()) {
          this.head = otherList.head
          this.size = otherList.size
      } else {
          let curr = this.head
          while(curr.next) {
              curr = curr.next
          }
          curr.next = otherList.head
          this.size += otherList.size
      }
  }


  print() {
      
      if(this.isEmpty()) {
          console.log('list is empty');
      } else {
          let list = '';
          let curr = this.head
          while(curr) {
              list += `${curr.value} `
              curr = curr.next
          }
          console.log(list);
      }
  }

}

let list_1 = new LinkedList()

list_1.append(10)
list_1.append(20)
list_1.append(30)

let list_2 = new LinkedList()

list_2.append(40)
list_2.append(50)
list_2.append(60)
list_1.merge(list_2)
list_1.print()