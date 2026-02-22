import { test, expect } from "bun:test";
import { isValid } from "./solution";

test.todo("simple valid", () => {
    expect(isValid("()")).toBe(true);
});

test.todo("multiple types valid", () => {
    expect(isValid("()[]{}")).toBe(true);
});

test.todo("mismatched", () => {
    expect(isValid("(]")).toBe(false);
});

test.todo("nested valid", () => {
    expect(isValid("([])")).toBe(true);
});
