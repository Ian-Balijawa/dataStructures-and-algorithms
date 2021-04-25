const _queueList = new WeakMap();

class Queue {
	constructor(size) {
		_queueList.set(this, []);
		this.size = size;
		enqueue = value => {
			if (value && !this.isFull()) {
				_queueList.get(this).push(value);
			} else {
				throw new Error(
					'Queue is already Full. Cannot add more elements'
				);
			}
		};

		dequeue = () => {
			if (!this.isEmpty()) return this.getList().shift();
		};

		getSize = () => {
			return this.size;
		};

		isEmpty = () => {
			return this.getList.length === 0;
		};

		isFull = () => {
			return this.getList.length === this.size;
		};

		sizeOfList = () => {
			return this.getList.length;
		};

		getList = () => {
			return _queueList.get(this);
		};
	}
}

class CircularQueue extends Queue {
	constructor(size) {
		super(size);
	}

	addFirst = element => {
		if (!this.isFull()) {
			return this.getList().unshift(element);
		}
	};

	getList = () => {
		return _queueList.get(this);
	};
	removeLast = () => {
		return this.getList().pop();
	};
}

module.exports = new Queue();
const circularQueue = new CircularQueue(20);

circularQueue.enqueue(12);
circularQueue.enqueue(13);
circularQueue.enqueue(14);
circularQueue.enqueue(15);
circularQueue.enqueue(16);
circularQueue.enqueue(17);
circularQueue.addFirst(18);
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
console.log(circularQueue.getList());
