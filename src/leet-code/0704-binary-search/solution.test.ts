import { test, expect } from "bun:test";
import { search } from "./solution";

test("finds target in middle", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test("returns -1 when target not found", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test("finds target at beginning", () => {
    expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
});

test("single element array", () => {
    expect(search([5], 5)).toBe(0);
    expect(search([5], 3)).toBe(-1);
});
