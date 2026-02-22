import { test, expect } from "bun:test";
import { isPalindrome } from "./solution";

test("palindrome with punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("not a palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
});

test("empty/whitespace is palindrome", () => {
    expect(isPalindrome(" ")).toBe(true);
});
