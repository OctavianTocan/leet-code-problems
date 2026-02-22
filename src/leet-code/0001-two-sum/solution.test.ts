import { test, expect } from "bun:test";
import { twoSum } from "./solution";

test("basic case", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("non-adjacent elements", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
