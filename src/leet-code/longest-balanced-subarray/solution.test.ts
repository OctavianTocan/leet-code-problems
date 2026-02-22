import { test, expect } from "bun:test";
import { longestBalancedSubarray } from "./solution";

test.todo("balanced subarray exists", () => {
    expect(longestBalancedSubarray([1, -1, 2, -2, 3])).toBe(4);
});

test.todo("no balanced subarray", () => {
    expect(longestBalancedSubarray([1, 2, 3])).toBe(0);
});
