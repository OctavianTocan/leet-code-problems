import { test, expect } from "bun:test";
import { sortedArrayToBST, TreeNode } from "./solution";

function toArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];
    while (queue.length > 0) {
        const node = queue.shift()!;
        if (node) {
            result.push(node.val);
            queue.push(node.left, node.right);
        } else {
            result.push(null);
        }
    }
    while (result.at(-1) === null) result.pop();
    return result;
}

test("balanced BST from sorted array", () => {
    const result = sortedArrayToBST([-10, -3, 0, 5, 9]);
    expect(result?.val).toBe(0);
    expect(toArray(result!)).toEqual([0, -3, 9, -10, null, 5]);
});

test("two elements", () => {
    const result = sortedArrayToBST([1, 3]);
    expect(result?.val).toBe(3);
});

test("empty array", () => {
    expect(sortedArrayToBST([])).toBeNull();
});
