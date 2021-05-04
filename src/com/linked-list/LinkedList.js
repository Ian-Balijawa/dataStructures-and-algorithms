const Comparator = require('./Comparator');
const SinglyLinkedListNode = require('./LinkedListNode').SinglyLinkedListNode;

class SinglyLinkedList {
	/**
	 * @param {Function} [comparatorFunction] as a callback
	 */
	constructor(comparatorFunction) {
		/** @var SinglyLinkedListNode */
		this.head = null;

		/** @var SinglyLinkedListNode */
		this.tail = null;

		this.compare = new Comparator(comparatorFunction);
	}

	/**
	 * @param {*} value
	 * @return {SinglyLinkedList}
	 */
	addFirst(value) {
		// Make new node to be a head.
		const newNode = new SinglyLinkedListNode(value, this.head);
		this.head = newNode;

		// If there is no tail yet let's make new node a tail.
		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	/**
	 * @param {*} value
	 * @return {SinglyLinkedList}
	 */
	addLast(value) {
		const newNode = new SinglyLinkedListNode(value);

		// If there is no head yet let's make new node a head.
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		// Attach new node to the end of linked list.
		this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}

	/**
	 * @param {*} value The value specifying the target node to be deleted
	 * @return {LinkedListNode} the node that was deleted
	 */
	delete(value) {
		if (!this.head) return null;

		let deletedNode = null;

		// If the head must be deleted then make next node that is differ
		// from the head to be a new head.
		while (this.head && this.compare.equal(this.head.value, value)) {
			deletedNode = this.head;
			this.head = this.head.next;
		}

		let currentNode = this.head;

		if (currentNode !== null) {
			// If next node must be deleted then make next node to be a next next one.
			while (currentNode.next) {
				if (this.compare.equal(currentNode.next.value, value)) {
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		// Check if tail must be deleted.
		if (this.compare.equal(this.tail.value, value)) {
			this.tail = currentNode;
		}

		return deletedNode;
	}

	/**
	 * @param {Object} findParams node value and a predicate function
	 * @param {*} findParams.value the value of a node being specified
	 * @param {function} [findParams.callback]
	 * @return {LinkedListNode} The node whose value if being sought and null if no such node exists
	 */
	find({ value = undefined, callback = undefined }) {
		if (!this.head) {
			return null;
		}

		let currentNode = this.head;

		while (currentNode) {
			// If callback is specified then try to find node by callback.
			if (callback && callback(currentNode.value)) {
				return currentNode;
			}

			// If value is specified then try to compare by value..
			if (
				value !== undefined &&
				this.compare.equal(currentNode.value, value)
			) {
				return currentNode;
			}

			currentNode = currentNode.next;
		}

		return null;
	}

	/**Equivalent to removing Last on dequeue data structure
	 * or the  pop method of the stack and queue
	 * @return {LinkedListNode}
	 */
	deleteTail() {
		const deletedTail = this.tail;

		if (this.head === this.tail) {
			// There is only one node in linked list.
			this.head = null;
			this.tail = null;

			return deletedTail;
		}

		// If there are many nodes in linked list...

		// Rewind to the last node and delete "next" link for the node before the last one.
		let currentNode = this.head;
		while (currentNode.next) {
			if (!currentNode.next.next) {
				currentNode.next = null;
			} else {
				currentNode = currentNode.next;
			}
		}

		this.tail = currentNode;

		return deletedTail;
	}

	/**
	 * This works just like the dequeue of a queue data structure
	 * by removing and returning the first element or node of the LinkedList
	 * some books call it the remove first method
	 * @return {LinkedListNode} head that was removed
	 */
	deleteHead() {
		if (!this.head) {
			return null;
		}

		const deletedHead = this.head;

		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}

		return deletedHead;
	}

	/**
	 * @param {*[]} values - Array of values that need to be converted to linked list.
	 * @return {SinglyLinkedList}
	 */
	fromArray(values) {
		values.forEach(value => this.addLast(value));

		return this;
	}

	/**
	 * @return {LinkedListNode[]}
	 */
	toArray() {
		const nodes = [];

		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}

		return nodes;
	}

	/**
	 * @param {function} [callback]
	 * @return {string}
	 */
	toString(callback) {
		return this.toArray()
			.map(node => node.toString(callback))
			.toString();
	}

	/**
	 * Reverse a linked list.
	 * @returns {SinglyLinkedList}
	 */
	reverse() {
		let currNode = this.head;
		let prevNode = null;
		let nextNode = null;

		while (currNode) {
			// Store next node.
			nextNode = currNode.next;

			// Change next node of the current node so it would link to previous node.
			currNode.next = prevNode;

			// Move prevNode and currNode nodes one step forward.
			prevNode = currNode;
			currNode = nextNode;
		}

		// Reset head and tail.
		this.tail = this.head;
		this.head = prevNode;

		return this;
	}
}

module.exports = SinglyLinkedList;
