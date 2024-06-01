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

 isEmpty(){
   return this.size === 0
 }

 append(value){
   const node = new Node(value);

       if(this.isEmpty()){
         this.head = node
       }else{
         let curr = this.head;
         while(curr.next){
           curr = curr.next
         }
         curr.next = node;
       }
       this.size++;
      
 }

 print(){
     if(this.isEmpty()){
        console.log("List is empty!!");
     }else{
        let curr = this.head;
        let printValue = '';
        while(curr){
           printValue += `${curr.value} `;
           curr = curr.next
        }
        console.log(printValue)
     }
 }
}

const list = new LinkedList();
list.append(1);
list.append(3);
list.print();