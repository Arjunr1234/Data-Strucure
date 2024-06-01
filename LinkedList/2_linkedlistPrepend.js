class Node{
  constructor(value) {
    this.value = value;
    this.next = null
    
  }
}

class LinkedList{
   constructor() {
      this.head = null;
      this.size = 0
    
   }
   isEmpty(){
    return this.size === 0;
   }

   prepend(value){
     const node = new Node(value)
      if(this.isEmpty()){
        this.head = node;
      }else{
         let curr = this.head;
          node.next = this.head;
          this.head = node;
      }
      this.size++;
   }

   reverse(){
    let curr = this.head;
    let prev = null;
    while(curr){
       let next = curr.next;
       curr.next = prev;
       prev=curr;
       curr = next
    }
    this.head = prev

    }
  

   print(){
      if(this.isEmpty()){
         console.log("List is empty!!!");
      }else{
         let curr = this.head;
         let printValue = '';
         while(curr){
            printValue += `${curr.value} `;
            curr = curr.next
         }
         console.log(printValue);
      }
   }
}
const list = new LinkedList;
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.reverse()
list.print()
