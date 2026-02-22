// https://leetcode.com/problems/median-of-two-sorted-arrays/
//
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
//
// The overall run time complexity should be O(log (m+n)).
//
// Example 1:
//   Input: nums1 = [1,3], nums2 = [2]
//   Output: 2.00000
//   Explanation: merged array = [1,2,3] and median is 2.
//
// Example 2:
//   Input: nums1 = [1,2], nums2 = [3,4]
//   Output: 2.50000
//   Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
//
// Constraints:
//   nums1.length == m
//   nums2.length == n
//   0 <= m <= 1000
//   0 <= n <= 1000
//   1 <= m + n <= 2000
//   -10^6 <= nums1[i], nums2[i] <= 10^6

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums2.length < nums1.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let [left, right] = [0, nums1.length - 1];
    const totalLength = nums1.length + nums2.length;
    const halfLength = Math.floor(totalLength / 2);

    while (true) {
        const mid1 = Math.floor((left + right) / 2);
        const mid2 = halfLength - mid1 - 2;

        const aLeft = mid1 >= 0 ? nums1[mid1]! : -Infinity;
        const aRight = (mid1 + 1) < nums1.length ? nums1[mid1 + 1]! : Infinity;
        const bLeft = mid2 >= 0 ? nums2[mid2]! : -Infinity;
        const bRight = (mid2 + 1) < nums2.length ? nums2[mid2 + 1]! : Infinity;

        if (aLeft <= bRight && bLeft <= aRight) {
            if (totalLength % 2 === 0) {
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            }
            return Math.min(aRight, bRight);
        } else if (aLeft > bRight) {
            right = mid1 - 1;
        } else {
            left = mid1 + 1;
        }
    }
}
