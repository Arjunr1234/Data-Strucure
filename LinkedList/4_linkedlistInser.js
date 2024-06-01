class Node{
  constructor(value) {
    this.value = value;
    this.next = null
    
  }
}
class LinkedList{
   constructor() {
    this.head = null;
    this.size = 0;
    
   }
  
   insert(value, index) {
    const node = new Node(value);
    if (index < 0 || index > this.size) {
        return null;
    }
    if (index === 0) {
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
    }
    this.size++;
}

remove(value){
    if(!this.head){
      return null
    }
    if(this.head === value){
       this.head = this.head.next;
    }else{
      let prev = this.head
       if(prev.next && prev.next !== value){
           prev = prev.next
       }
       if(prev.next){
          prev.next = prev.next.next;

       }
       this.size--;
    }
}

   removeIndex(index){
        if(index < 0 || index > this.size){
          return null
        }
        if(index === 0){
          this.head = this.head.next
        }else{
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            prev.next = prev.next.next;
        }
        this.size--;
   }

   search(value){
     if(!this.head){
        return -1
     }
     let curr = this.head;
     let i=0;

     while(curr){
        if(curr.value === value){
          return i
        }
        curr = curr.next;
        i++;
     }

     
   }

   reverse(){
      let prev = null;
      let curr = this.head;
      while(curr){
         let next = curr.next;
         curr.next = prev;
         prev = curr;
         curr = next;
         
      }
      this.head = prev
   }

   print(){
      if(!this.head){
         console.log("List is empty!!");
      }else{
         let curr = this.head;
         let printValue = '';

         while(curr){
          printValue += `${curr.value} `
          curr = curr.next;
         }
          console.log(printValue);
      }
   }
}

const list = new LinkedList()
list.insert(1,0);
list.insert(2,1)
list.insert(3,2)
list.insert(4,3)
list.insert(5,4)
//list.remove(3);
//list.removeIndex(2);
//list.reverse()
console.log(list.search(3))
list.print()