import { test, expect } from "bun:test";
import { findTheLongestBalancedSubstring } from "./solution";

test("balanced in the middle", () => {
    expect(findTheLongestBalancedSubstring("01000111")).toBe(6);
});

test("partial balance", () => {
    expect(findTheLongestBalancedSubstring("00111")).toBe(4);
});

test("no balanced substring", () => {
    expect(findTheLongestBalancedSubstring("111")).toBe(0);
});
