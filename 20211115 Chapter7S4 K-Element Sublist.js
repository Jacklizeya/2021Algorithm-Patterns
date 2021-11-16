
class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  
  
  const reverse_every_k_elements = function(head, k) {
    // TODO: Write your code here
    let previous = null
    let current = head

    let sectionTails = [head]
    let sectionHeads = []
    let count = 0

    while (current !== null) {
        // turn around one arrow
        let next = current.next
        current.next = previous
        previous = current
        current = next
        count++

        if (count === 3) {
            sectionHeads.push(previous)
            if (current !== null) {sectionTails.push(current)}
            previous = null  
            count = 0
        }
    }
    if (previous !== null) {sectionHeads.push(previous)}

    console.log("Section Heads and Section Tails", sectionHeads, sectionTails)
    head = sectionHeads[0]
    for (let i = 0; i < sectionTails.length; i++) {
        if (sectionHeads[i + 1]) {sectionTails[i].next = sectionHeads[i + 1]} else {sectionTails[i].next = null}
    }

    return head

  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  head.next.next.next.next.next.next = new Node(7)
  head.next.next.next.next.next.next.next = new Node(8)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)
  
