const Queue = require('./Queue.js');

class CircularQueue extends Queue {
	constructor(size) {
		super(size);
	}
}

const cQueue = new CircularQueue(20);

cQueue.enqueue(2);
console.log(cQueue.size);
