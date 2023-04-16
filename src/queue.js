const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.queue[0]
  }

  enqueue(value) {
    this.queue = this.queue ? this.queue : []
    const list = new ListNode(value)
    this.queue.push(list)

    this.queue.forEach((elem, index, array) => {
      elem.next = array[index + 1] ? array[index + 1] : null
    });
  }

  dequeue() {
    return this.queue.shift().value
  }
}

module.exports = {
  Queue
};
