// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
//
// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.
//
// Example 1:
//   Input: nums = [-10,-3,0,5,9]
//   Output: [0,-3,9,-10,null,5]
//   Explanation: [0,-10,5,null,-3,null,9] is also accepted.
//
// Example 2:
//   Input: nums = [1,3]
//   Output: [3,1]
//   Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
//
// Constraints:
//   1 <= nums.length <= 10^4
//   -10^4 <= nums[i] <= 10^4
//   nums is sorted in strictly increasing order.

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);

    return new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1)),
    );
}
