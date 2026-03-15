import { test, expect } from "bun:test";
import { canFinish } from "./solution";

test("two courses, one prerequisite — can finish", () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
});

test("two courses, circular dependency — cannot finish", () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
});

test("no prerequisites — can finish", () => {
    expect(canFinish(3, [])).toBe(true);
});

test("single course — can finish", () => {
    expect(canFinish(1, [])).toBe(true);
});

test("chain of prerequisites — can finish", () => {
    expect(canFinish(4, [[1, 0], [2, 1], [3, 2]])).toBe(true);
});

test("complex cycle — cannot finish", () => {
    expect(canFinish(3, [[0, 1], [1, 2], [2, 0]])).toBe(false);
});
