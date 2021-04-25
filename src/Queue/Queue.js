const _list = new WeakMap();

class Queue {
	constructor(size) {
		_list.set(this, []);
		const queueList = _list.get(this);

		this.enqueue = element => {
			if (element && !this.isFull()) {
				queueList.push(element);
			} else {
				throw new Error(
					'Queue is already Full. Cannot add more elements'
				);
			}
		};

		this.dequeue = () => {
			if (!this.isEmpty());
			return queueList.shift();
		};

		this.size = () => {
			return this.size;
		};

		this.isEmpty = () => {
			return queueList.length === 0;
		};

		this.isFull = () => {
			return queueList.length === size;
		};

		Object.defineProperty(this, 'list', {
			get: function () {
				return queueList;
			},
		});

		Object.defineProperty(this, 'size', {
			get: function () {
				return size;
			},
		});

		Object.defineProperty(this, 'sizeOfList', {
			get: function () {
				return numberOfElements;
			},
		});

		this.getAllElements = () => {
			return queueList;
		};
	}

	addFirst(element) {
		if (!this.isFull()) {
			return this.getAllElements().unshift(element);
		}
	}
	removeLast() {
		return this.getAllElements().pop();
	}
}

CircularQueue.prototype = Object.create(Queue.prototype);
module.exports.Queue = Queue;

// const queue = new Queue(20);
// queue.enqueue(12);
// queue.enqueue(12);
// queue.enqueue(12);
// queue.enqueue(12);
// queue.enqueue(11);

// console.log(queue.removeLast());
// console.log(queue.addFirst(2));
// console.log(queue.getAllElements());
