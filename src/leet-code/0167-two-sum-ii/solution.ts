// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
//
// Given a 1-indexed array of integers numbers that is already sorted in
// non-decreasing order, find two numbers such that they add up to a specific
// target number.
//
// Return the indices of the two numbers (1-indexed) as [index1, index2],
// where 1 <= index1 < index2 <= numbers.length.
//
// You may not use the same element twice. There is exactly one solution.
//
// Example 1:
//   Input: numbers = [2,7,11,15], target = 9
//   Output: [1,2]
//
// Example 2:
//   Input: numbers = [2,3,4], target = 6
//   Output: [1,3]
//
// Example 3:
//   Input: numbers = [-1,0], target = -1
//   Output: [1,2]
//
// Constraints:
//   2 <= numbers.length <= 3 * 10^4
//   -1000 <= numbers[i] <= 1000
//   numbers is sorted in non-decreasing order.
//   -1000 <= target <= 1000
//   There is exactly one solution.

export function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left]! + numbers[right]!;

        if (sum === target) return [left + 1, right + 1];
        if (sum < target) left++;
        else right--;
    }

    return [];
}
