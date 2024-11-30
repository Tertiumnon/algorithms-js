import { expect, test } from "bun:test";
import pivotIndex from "./pivot-index";

test("case 1", () => {
	const result = pivotIndex([1, 7, 3, 6, 5, 6]);
	expect(result).toEqual(3);
});

test("case 2", () => {
	const result = pivotIndex([2, 1, -1]);
	expect(result).toEqual(0);
});

test("case 3", () => {
	const result = pivotIndex([1, 0]);
	expect(result).toEqual(0);
});
