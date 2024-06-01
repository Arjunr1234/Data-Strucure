function isPalindrome(pal) {
  let list_1 = new LinkedList();
  let list_2 = new LinkedList();

  for (let i = 0; i < pal.length; i++) {
     list_1.append(pal[i])
     list_2.prepend(pal[i])
      
  }
  let curr1 = list_1.head
  let curr2 = list_2.head
  while(curr1 && curr2) {
      if(curr1.value != curr2.value) {
          return false
      }
      curr1 = curr1.next
      curr2 = curr2.next
  }
  return true
}

console.log(isPalindrome([1,2,3,2,1]));