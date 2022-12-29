"use strict";
class Stack {
    items;
    count;
    constructor() {
        this.items = [];
        this.count = 0;
    }
    //Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count += 1;
        return this.count - 1;
    }
    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if (this.count == 0)
            return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }
    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }
    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');
        return this.count == 0;
    }
    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`);
        return this.count;
    }
    // Print elements in stack
    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }
    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared..');
        return this.items;
    }
}
const stack = new Stack();
stack.isEmpty();
stack.push(100);
stack.push(200);
stack.push(300);
stack.pop();
stack.peek();
stack.isEmpty();
stack.size();
console.log(stack.print());
stack.clear();
stack.size();
stack.isEmpty();
