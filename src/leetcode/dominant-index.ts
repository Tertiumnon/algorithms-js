const dominantIndex = (nums: number[]): number => {
	const numsLen = nums.length;
	let largestNum = nums[0];
	let largestNumI = 0;
	let nonLargestNum = nums[1];
	for (let i = 1; i < numsLen; i += 1) {
		const numsItem = nums[i];
		if (numsItem > nonLargestNum) nonLargestNum = numsItem;
		if (numsItem > largestNum) {
			nonLargestNum = largestNum;
			largestNum = numsItem;
			largestNumI = i;
		}
	}
	if (
		(largestNum > 0 && nonLargestNum === 0) ||
		largestNum / nonLargestNum >= 2
	)
		return largestNumI;
	return -1;
};

export default dominantIndex;
