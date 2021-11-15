class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  const find_middle_of_linked_list = function(head) {
    // TODO: Write your code here
    let current
    let slow = head
    let faster = head

    while (faster !== null && faster.next !== null) {
        faster = faster.next.next
        slow = slow.next
    }

    if (faster === undefined) {return current} else {return slow}

  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  
  head.next.next.next.next.next = new Node(6)
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  
  head.next.next.next.next.next.next = new Node(7)
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  
