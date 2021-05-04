const { DoublyLinkedListNode } = require('./LinkedListNode');
const SinglyLinkedList = require('./LinkedList');
const Comparator = require('./Comparator');

class DoublyLinkedList extends SinglyLinkedList {
	/**
     super(comparatorFunction);
	 * @param {Function} [comparatorFunction] passed in as a callback
	 */
	constructor(comparatorFunction) {
		super(comparatorFunction);
		this.compare = new Comparator(comparatorFunction);
	}

	/**
	 * @param {*} value
	 * @return {DoublyLinkedList}
	 */
	addFirst(value) {
		// Make new node to be a head.
		const newNode = new DoublyLinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		// If there is no tail yet let's make new node a tail.
		if (!this.tail) {
			this.tail = newNode;
			return this;
		}

		newNode.next = this.head;
		this.head = newNode.next;

		return this;
	}

	/**
	 * @param {*} value
	 * @return {SinglyLinkedList}
	 */
	addLast(value) {
		const newNode = new DoublyLinkedListNode(value);

		// If there is no head yet let's make new node a head.
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		// Attach new node to the end of linked list.
		let currentNode = this.head;
		let previousNode = null;
		while (currentNode) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		previousNode.next = newNode;
		newNode.previous = previousNode;

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
		if (this.head && this.compare.equal(this.head.value, value)) {
			deletedNode = this.head;
			this.head = this.head.next;

			return deletedNode;
		}

		let currentNode = this.head;

		if (currentNode !== null) {
			// If next node must be deleted then make next node to be a next next one.
			while (currentNode.next) {
				if (this.compare.equal(currentNode.next.value, value)) {
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
					currentNode.previous = deletedNode.previous;
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
}

module.exports = DoublyLinkedList;

const db = new DoublyLinkedList();
db.addFirst(1);
db.addFirst(2);
db.addFirst(3);
db.addLast(4);
db.addLast(6);
db.addLast(6);
db.addLast(6);
db.addLast(6);
db.addLast(5);

console.log(db.head);
console.log(db.toArray());
console.log(db.toString());
