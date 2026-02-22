import { test, expect } from "bun:test";
import { containsDuplicate } from "./solution";

test.todo("has duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test.todo("all distinct", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test.todo("many duplicates", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
