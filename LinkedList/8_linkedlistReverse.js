class Node{
   constructor(value){
        this.value = value;
        this.next = null;
        
   }
}

class LinkedList{
   constructor(){
       this.head = null;
       this.size = 0;
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

list.append(3);
list.append(5)
list.append(6);
list.append(34)
list.print()
list.reverse();
list.print()

