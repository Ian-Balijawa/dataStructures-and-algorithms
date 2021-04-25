const _num = new WeakMap();

class Fibonacci {
	constructor(number) {
		_num.set(this, number);
	}
	/**
	 * @param {*} number
	 * @returns The Nth Fibonacci in any sequence of integral numbers
	 * Un-memoized Fibonacci and runs in exponential time
	 */
	recursiveFib(number = _num.get(this)) {
		if (Fibonacci.isValid(number)) {
			return number === 0 || number === 1
				? 1
				: this.recursiveFib(number - 1) + this.recursiveFib(number - 2);
		}
	}
	/**
	 * @param {*} number
	 * @returns The Nth Fibonacci in any sequence of integral numbers
	 * Memoized Fibonacci and runs in linear time
	 */
	memoizedRecursiveFib(number = _num.get(this)) {
		const memo = new Map();
		if (Fibonacci.isValid(number)) {
			memo.set(1, 0);
			memo.set(2, 1);
			if (!memo.has(number)) {
				memo.set(
					number,
					this.recursiveFib(number - 1) +
						this.recursiveFib(number - 2)
				);
			}
			return memo.get(number);
		}
	}

	iterativeFib(number = _num.get(this)) {
		if (Fibonacci.isValid(number)) {
			let previous = 0;
			let current = 1;
			let next = previous + current;
			if (number === 1 || number === 2) return next;

			for (let i = 2; i <= number; i++) {
				previous = --i;
				current = ++i;
				next = previous + current;
				current = next;
			}
		}
	}

	static isValid(number) {
		return Number.isInteger(number) && number >= 0;
	}
}

module.exports = new Fibonacci();
