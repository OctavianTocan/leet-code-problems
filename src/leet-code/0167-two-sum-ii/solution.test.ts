import { test, expect } from "bun:test";
import { twoSum } from "./solution";

test("basic case", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
});

test("non-adjacent pair", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
});

test("negative numbers", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
});
