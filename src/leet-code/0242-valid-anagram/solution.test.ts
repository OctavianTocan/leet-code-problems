import { test, expect } from "bun:test";
import { isAnagram } from "./solution";

test("valid anagram", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test("not an anagram", () => {
    expect(isAnagram("rat", "car")).toBe(false);
});

test("different lengths", () => {
    expect(isAnagram("ab", "abc")).toBe(false);
});
