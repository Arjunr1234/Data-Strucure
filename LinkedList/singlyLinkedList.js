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
      return this.size == 0
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

  prepend(value) {
      let newNode = new Node(value)
      if(this.isEmpty()) {
          this.head = newNode
      } else {
          newNode.next = this.head
          this.head = newNode
      }
      this.size++
      
  }

  insert(value, index) {
      let newNode = new Node(value)
      if(index < 0 || index > this.size) {
          return null
      }
      if(index == 0) {
         this.prepend(value)
      } else {
          let curr = this.head
          for (let i = 0; i < index -1; i++) {
              curr = curr.next
              
          }
          newNode.next = curr.next
          curr.next = newNode
      }
      this.size++
  }

  removeFrom(index) {
      if(index < 0 || index > this.size) {
          return null
      }
      let removeNode = null
      if(index == 0) {
          this.head = this.head.next
      } else {
        let curr = this.head
        for (let i = 0; i < index -1; i++) {
          curr = curr.next           
      }
      removeNode = curr.next
      curr.next = removeNode.next
      }
     this.size--
     return removeNode ? removeNode.value : null
  }

  removeValue(value) {
      if(this.isEmpty()) {
          return null
      }
      if(this.head.value == value) {
          this.head = this.head.next  
          this.size --
          return value
      }
      else {
         
          let curr = this.head
          while(curr.next && curr.next.value !== value) {
              curr =curr.next
          }
          if(curr.next){

             let removeNode = curr.next
              curr.next = removeNode.next
              this.size--
              return curr.value
          }
          return null
      }
  }

  findMiddle() {
      let slow = this.head
      let fast = this.head
      while(fast && fast.next) {
          slow = slow.next
          fast = fast.next.next
      }
      return slow.value
  }

  sum() {
      let total = 0
      let curr = this.head
      while(curr) {
          total += curr.value
          curr = curr.next
      }
      return total
  }

  findMax() {
      let max = this.head.value
      let curr = this.head.next
      while(curr) {
          if(curr.value > max) {
              max = curr.value
          }
          curr = curr.next
      }
      return max
  }

  reverse() {
      let prev = null
      let curr = this.head
      while(curr) {
          let next = curr.next
          curr.next = prev
          prev = curr
          curr = next
      }
      this.head = prev
  }

  isPalindrome() {
  let slow = this.head;
  let fast = this.head;
  
  // Find the middle of the linked list
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }

  // Compare the first half with the reversed second half
  let firstHalf = this.head;
  let secondHalf = prev;
  while (secondHalf) {
      if (firstHalf.value !== secondHalf.value) {
          return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
  }
  return true;
}




  print() {
      let list = '';
      let curr = this.head;
      while(curr) {
          list += `${curr.value} `;
          curr = curr.next;
      }
      console.log(list);
  }
  

}


function mergeArraysToList(arr1, arr2) {
  let mergedList = new LinkedList();

  // Append elements from the first array
  for (let i = 0; i < arr1.length; i++) {
      mergedList.append(arr1[i]);
  }

  // Append elements from the second array
  for (let i = 0; i < arr2.length; i++) {
      mergedList.append(arr2[i]);
  }

  return mergedList;
}

// Example usage:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedList = mergeArraysToList(array1, array2);

console.log('Merged list size:', mergedList.getSize());
mergedList.print();