import { test, expect } from "bun:test";
import { maxMedianFairSegment } from "./solution";

test.todo("basic case", () => {
    expect(maxMedianFairSegment([1, 2, 4], [2, 3, 5], 6)).toBe(4);
});

test.todo("no valid pair", () => {
    expect(maxMedianFairSegment([0, 0, 0], [0, 0], 1)).toBe(0);
});

test.todo("full range valid", () => {
    expect(maxMedianFairSegment([1, 2, 3], [4, 5, 6], 7)).toBe(3);
});
