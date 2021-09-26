class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


const reverse = function(head) {
  // TODO: Write your code here
  
  let previous = null
  let nextOne = head.next
  let current = head


  while (current !== null) {
    // storage this one before it is overwritten
    nextOne = current.next
    // do you thing
    current.next = previous
    // update previous and current
    previous = current
    current = nextOne
  }


  head = previous

  return head;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)

