class Node {
   //node class constructor
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    
  }
}
function breadthFirst() {
  let viewed = [];
  let queue = [];
  let current = this.root;
  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    viewed.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return viewed;
  //should return all node values in breadth first order
}
