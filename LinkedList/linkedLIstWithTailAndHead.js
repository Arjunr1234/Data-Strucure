class Node{
    constructor(value){
       this.value = value;
       this.next = null;
    }
}

class LinkedList{
     constructor(){
       this.head = null; 
       this.tail = null;
       this.size = 0;
     }

     isEmpty(){
        return this.size === 0;
     }
     getSize(){
       return this.size
     }

    

  prepend(values) {
    let node = new Node(values)
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
    
  }

     append(value){
       const node = new Node(value)
       if(this.isEmpty()){
        this.head = node;
        this.tail = node;
       }else{
         this.tail.next = node;
         this.tail = node
       }
       this.size++;

     }

     removeBegin(value){
          if(this.isEmpty()){
             return null
          }else{
             const removeValue = this.head.value;
             this.head = this.head.next
             this.size--;
             return removeValue
          }

     }

     removeFromEnd() {
      if(this.isEmpty() ) {
      return null
      }
      const value = this.tail.value
      if(this.size === 1) {
      this.head = null
      this.tail = null
      } else {
      let prev = this.head
      while(prev.next!== this.tail) {
      prev = prev.next
      }
      prev.next = null
      this.tail = prev
      }
      this.size--
      return value
      }
    

    print() {
      if(this.isEmpty()){
        console.log("This is empty!!");
      }else{
        let list = ''
        let curr = this.head
        while(curr) {
          list += `${curr.value} `
          curr = curr.next
        }
        console.log(list);
      }
     
    }
}

const list = new LinkedList()

list.prepend(10)
list.prepend(20);
list.prepend(34);
list.append(3)
console.log(list.getSize());
list.print()
list.removeBegin()
console.log(list.getSize());
list.removeFromEnd()
list.print()