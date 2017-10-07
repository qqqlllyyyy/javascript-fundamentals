/* Stacks */

// Functions: push, pop, peek, length

//-------------------------------------------------------------------------
// Use array as stack
//-------------------------------------------------------------------------
// A nice feature of JS is that the array object already has all the functions.
// We can just use an array as a stack.
console.log("Use array as stack:");

// Check Palindrome:
let letters = []; // Stack
let word = "racecar";
let rword = ""; // Reversed word

// Put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
// Pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}
if (word === rword) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

//-------------------------------------------------------------------------
// Create a stack
//-------------------------------------------------------------------------
// ES5 syntax
console.log("\nCreate a stack (ES5):");
var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Add a value to the end
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and return the top value
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };

  // Return the top value
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("free");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

// ES6 syntax
console.log("\nCreate a stack (ES6):");

class Stack2 {
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  peek() {
    return this.storage[this.count - 1];
  }
}

var myStack = new Stack2();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("free");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
