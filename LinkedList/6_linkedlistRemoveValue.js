class Node{
  constructor(value){
     this.value = value;
     this.next = null;
  }

}
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0
  }

  isEmpty(){
    return this.size === 0; 
  }
  getSize(){
    return this.size
  }

  append(value){
    const node = new Node(value);
    if(this.isEmpty){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
  }

  append(values){
    const node = new Node(values);
    if(this.isEmpty()){
         this.head = node
    }else{
      let prev = this.head
      while(prev.next){
          prev = prev.next;
      }
      prev.next = node
      
    }
    this.size++;
}
prependValue(values){
  const node = new Node()
  if(this.isEmpty()){
       this.head = node
  }else{
    node.next = this.head
    this.head = node
  }
  this.size++;
}

insert(value, index){
     if(index < 0 || index > this.size){
          return 
     }else if(index === 0){
        this.prependValue(value)
     }else{
       const node = new Node(value);
       let prev = this.head;
       for(let i=0; i<index-1; i++){
         prev = prev.next;
       }
       node.next = prev.next;
       prev.next = node;
       this.size++;
        
     }
}

removeIndex(index){
         if(index < 0 || index >= this.size){
             return null
         }
         let removeNode 
         if(index === 0){
            removeNode = this.head;
            this.head = this.head.next
         }else{
         let  prev = this.head;
          for(let i=0; i<index-1; i++){
              prev = prev.next
          }
          removeNode = prev.next;
          prev.next = removeNode.next;
         }
         this.size--;
         return removeNode.value

}

removeValue(value){
       if(this.isEmpty()){
          return null
       }if(this.head.value === value){
        this.head = this.head.next;
        this.size--;
        return value
       }else{
        let prev = this.head
        while(prev.next && prev.next.value !== value){
          prev = prev.next
        }
        if(prev.next){
          const removeNode = prev.next;
          prev.next = removeNode.next;
          this.size--;
          return value
        }
        return null
       }
}

print(){
  if(this.isEmpty()){
    console.log("List is empty!!");
  } else {
    let current = this.head;
    let listValues = '';
    while(current){
        listValues += `${current.value} `;
        current = current.next;
    }
    console.log(listValues);
  }
}


}

const list = new LinkedList()
list.append(17)
console.log("list is empty: ",list.isEmpty());
console.log("List size: ", list.getSize());
list.append(10);
list.append(3)
list.append(2);
list.append(56)
list.print()
list.insert(343, 2);
list.print()
list.removeIndex(2);
list.print()
list.removeValue(2);
list.print()








