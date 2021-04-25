function Stack(size) {
	const list = [];
	let numberOfElements = 0;

	this.push = function (value) {
		if (!this.isFull() && value) {
			list.push(value);
			numberOfElements++;
		} else {
			throw new Error(
				'StackOverFlow Operation. Cannot push to an already full stack'
			);
		}
	};

	this.peek = function () {
		return this.isEmpty() ? null : list[numberOfElements - 1];
	};

	this.pop = function () {
		if (!this.isEmpty()) {
			list.splice(numberOfElements - 1);
			numberOfElements--;
		} else {
			throw new Error('StackUnderflow! cannot pop from an empty stack');
		}
	};

	this.isFull = function () {
		return numberOfElements === size;
	};

	this.isEmpty = function () {
		return numberOfElements === 0;
	};

	let getSizeOfList = function () {
		return `${numberOfElements} element(s)`;
	};
	Object.defineProperty(this, 'listSize', {
		get: function () {
			return getSizeOfList();
		},
	});

	Object.defineProperty(this, 'getElements', {
		get: function () {
			return list;
		},
	});
}
