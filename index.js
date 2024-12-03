class Stack {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  remove() {
    if(this.isEmpty()) {
      return `There's nothing in the stack to remove`;
    }

    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const pancakes = new Stack();
pancakes.add('strawberry');
console.log(pancakes);
// pancakes.add('blueberry');
// pancakes.add('boisenberry');

// pancakes.remove();
// pancakes.remove();
// pancakes.remove();
// const removedItem = pancakes.remove();

// console.log(removedItem);

// console.log(pancakes.isEmpty());




// const cars = new Stack();
// const browserHistory = new Stack();