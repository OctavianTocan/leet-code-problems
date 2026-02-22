// Longest Balanced Substring II
// (Contest / custom problem)
//
// Find the length of the longest balanced substring. A balanced substring
// is one that contains an equal number of '0's and '1's, and all the '0's
// come before all the '1's in the substring.
//
// Example 1:
//   Input: s = "01000111"
//   Output: 6
//   Explanation: The longest balanced substring is "000111".
//
// Example 2:
//   Input: s = "00111"
//   Output: 4
//
// Example 3:
//   Input: s = "111"
//   Output: 0

export function findTheLongestBalancedSubstring(s: string): number {
    let maxLen = 0;
    let zeros = 0;
    let ones = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            if (ones > 0) {
                zeros = 0;
                ones = 0;
            }
            zeros++;
        } else {
            ones++;
            maxLen = Math.max(maxLen, 2 * Math.min(zeros, ones));
        }
    }

    return maxLen;
}
