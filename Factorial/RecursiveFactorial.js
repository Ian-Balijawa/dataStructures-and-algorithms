/**
 * @param {*} number
 * @returns  The Factorial of a number
 */

function recursivefactorial(number) {
	if (typeof number !== 'number') {
		console.log('please supply a number');
		return;
	}
	if (number < 0) throw new Error('The argument supplied must be positive');
	if (number === 1 || number === 0) return 1;
	return number * recursivefactorial(number - 1);
}
console.log(recursivefactorial(5));
