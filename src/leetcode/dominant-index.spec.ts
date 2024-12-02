import { expect, test } from "bun:test";
import dominantIndex from "./dominant-index";

test("case 1", () => {
	const result = dominantIndex([3, 6, 1, 0]);
	expect(result).toEqual(1);
});

test("case 2", () => {
	const result = dominantIndex([1, 2, 3, 4]);
	expect(result).toEqual(-1);
});

test("case 3", () => {
	const result = dominantIndex([0, 0, 0, 1]);
	expect(result).toEqual(3);
});

test("case 4", () => {
	const result = dominantIndex([1, 0]);
	expect(result).toEqual(0);
});

test("case 5", () => {
	const result = dominantIndex([0, 2, 3, 0]);
	expect(result).toEqual(-1);
});

test("case 5", () => {
	const result = dominantIndex([0, 0, 3, 2]);
	expect(result).toEqual(-1);
});
