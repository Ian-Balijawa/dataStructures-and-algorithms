class SinglyLinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
	/**
	 *
	 * @param {Function} callback callback function used to represent the node as a string
	 * @return The string representation of a Node according to the callback provided as an argument
	 */
	toString(callback) {
		return callback ? callback(this.value) : `${this.value}`;
	}
	/**
	 * @return the String representation of a Node
	 */
	toString() {
		return `Node =  ${this.value}`;
	}

	/**
	 * @return True whelther two nodes are equal to each other
	 *@param {SinglyLinkedListNode} other the node being compared to
	 *
	 */
	equals(other) {
		return this.value === other.value ? true : false;
	}
}

class DoublyLinkedListNode extends SinglyLinkedListNode {
	constructor(value, next = null, previous = null) {
		super(value, next, previous);
		this.next = this.previous = null;
	}
}

// const db1 = new DoublyLinkedListNode(12);
// const db2 = new DoublyLinkedListNode(12);
// const db3 = new DoublyLinkedListNode(15);

// console.log(db1.toString()); //Node = 12

// console.log(db1.equals(db2)); //true

// console.log(db1.equals(db3)); //false

// console.log(db2.next); // null
// console.log(db2.previous); //null

module.exports = {
	SinglyLinkedListNode: SinglyLinkedListNode,
	DoublyLinkedListNode: DoublyLinkedListNode,
};
