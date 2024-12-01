const pivotIndex = (numbers: number[]): number => {
	const numbersLen = numbers.length;
	let leftSum = 0;
	let rightSum = numbers.reduce((sum, n) => sum + n, 0) - numbers[0];
	if (leftSum === rightSum) return 0;
	for (let i = 1; i < numbersLen; i += 1) {
		leftSum += numbers[i - 1];
		rightSum -= numbers[i];
		if (leftSum === rightSum) return i;
	}
	return -1;
};

export default pivotIndex;
