class Node{
     constructor(value){
       this.value = value;
       this.next = null;
       this.prev = null;
     }
}

class LinkedList{
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      
    }

    isEmpty(){
       return this.size === 0
    }
    getSize(){
       return this.size
    }

    append(value){
       const node = new Node(value)
        if(this.isEmpty()){
           this.head = node;
           this.tail = node

        }else{
           this.tail.next = node;
           node.prev = this.tail;
           this.tail = node
        }
        this.size++;
    }

    prepend(value){
       const node = new Node(value)
       if(this.isEmpty()){
         this.head = node;
         this.tail = node;
       }else{
         this.head.prev = node;
         node.next = this.head;
         this.head = node
       }
       this.size++;
    }

    removeFromEnd(){
        if(this.isEmpty()){
           return null
        }
        if(this.size === 1){
           this.head = null;
           this.tail = null;
           this.size--;
        }else{
           this.tail = this.tail.prev
           this.tail.next = null;
           this.size--;
        }

    }
    removeFromBegin(){
        if(this.isEmpty()){
           return null
        }
        if(this.size === 1){
           this.head = null;
           this.tail = null;
        }else{
           this.head = this.head.next;
           this.head.prev = null;
           

        }
        this.size--;
    }

   insert(value, index){
      if(index < 0 || index > this.size){
         return null
      }
      if(index == 0){
         this.prepend(value)
      }else{
         const newNode = new Node(value);
         let curr = this.head;
         for(let i=0; i<index-1; i++){
             curr = curr.next;
         }
         newNode.next = curr.next;
         newNode.prev = curr;
         curr.next = newNode;
         curr.next.prev = newNode;
      }
      this.size++;
   }

   remove(value) {
    let curr = this.head;
    while (curr) {
        if (curr.value === value) {
            if (this.head === curr && this.tail === curr) {
                this.head = null;
                this.tail = null;
            } else if (this.head === curr) {
                this.head = this.head.next;
                this.head.prev = null;
            } else if (this.tail === curr) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                curr.next.prev = curr.prev;
                curr.prev.next = curr.next;
            }
            this.size--;
            return true;
        }
        curr = curr.next;
    }
    return false;
}


   reverseString(){
      let curr = this.tail;
      let reverseString = '';
      while(curr){
         reverseString += curr.value;
         curr = curr.prev
      }
      return reverseString
   }


    print(){
       if(this.isEmpty()){
         console.log("linkedList is empty!!");
       }else{
         let printValue = '';
         let curr = this.head;
         while(curr){
           printValue += `${curr.value} `
           curr = curr.next
         }
         console.log(printValue);
       }
    }
}

const list = new LinkedList();
list.print()
list.prepend(3)
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.insert(45,0)
//list.removeFromEnd()
//list.removeFromBegin()
const reverseList = new LinkedList()

function reverseStr(str){
  for(let char of str){
    reverseList.append(char)
  }
  console.log(reverseList.reverseString())
}
reverseStr("arjun")

list.remove(45)
list.print()