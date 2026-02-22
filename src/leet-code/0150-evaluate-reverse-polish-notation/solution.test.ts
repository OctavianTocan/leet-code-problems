import { test, expect } from "bun:test";
import { evalRPN } from "./solution";

test("addition and multiplication", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
});

test("division truncates toward zero", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
});

test("complex expression", () => {
    expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22);
});
