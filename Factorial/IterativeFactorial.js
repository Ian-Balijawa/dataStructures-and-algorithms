/**
 * This is an iterative Factorial function, an alternative to recursion
 * @param {*} number
 * @returns The Factorial of the @param number supplied as an argument
 *
 * This iterative function has both Time complexity and Space complexity of O(N)
 */

function iterativeFactorial(number) {
	if (number < 0) {
		console.log('Only positive Integers should be provided! ');
		return;
	}
	let Nfactorial = 1;
	for (let i = number; i >= 1; i--) Nfactorial *= i;
	return Nfactorial;
}

console.log(iterativeFactorial(-12));
