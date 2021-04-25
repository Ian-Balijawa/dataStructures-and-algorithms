class Factorial {
	constructor(number) {
		this.number = number;
	}
	/**
	 * @param {*} number
	 * @returns  The Factorial of a number
	 */

	recursivefactorial(number = this.number) {
		if (typeof number !== 'number') {
			console.log('please supply a number');
			return;
		}
		if (number < 0)
			throw new Error('The argument supplied must be positive');
		if (number === 1 || number === 0) {
			return 1;
		}
		return number * this.recursivefactorial(number - 1);
	}

	/**
	 * This is an iterative Factorial function, an alternative to recursion
	 * @param {*} number
	 * @returns The Factorial of the @param number supplied as an argument
	 *
	 * This iterative function has both Time complexity and Space complexity of O(N)
	 */

	iterativeFactorial(number = this.number) {
		if (number < 0) {
			console.log('Only positive Integers should be provided! ');
			return;
		}
		let Nfactorial = 1;
		for (let i = number; i >= 1; i--) Nfactorial *= i;
		return Nfactorial;
	}
}
const fact = new Factorial(5);
console.log(fact.iterativeFactorial());
console.log(fact.recursivefactorial());
