import { test, expect } from "bun:test";
import { simplifyPath } from "./solution";

test("trailing slash", () => {
    expect(simplifyPath("/home/")).toBe("/home");
});

test("double slashes", () => {
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
});

test("dot-dot navigation", () => {
    expect(simplifyPath("/home/user/Documents/../Pictures")).toBe("/home/user/Pictures");
});

test("beyond root", () => {
    expect(simplifyPath("/../")).toBe("/");
});

test("triple dots are valid names", () => {
    expect(simplifyPath("/.../a/../b/c/../d/./")).toBe("/.../b/d");
});
