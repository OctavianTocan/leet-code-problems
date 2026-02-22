import { test, expect } from "bun:test";
import { findMedianSortedArrays } from "./solution";

test("odd total length", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test("even total length", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

test("one empty array", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
});
