// https://leetcode.com/problems/valid-palindrome/
//
// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, it reads
// the same forward and backward.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
// Example 1:
//   Input: s = "A man, a plan, a canal: Panama"
//   Output: true
//   Explanation: "amanaplanacanalpanama" is a palindrome.
//
// Example 2:
//   Input: s = "race a car"
//   Output: false
//
// Example 3:
//   Input: s = " "
//   Output: true
//
// Constraints:
//   1 <= s.length <= 2 * 10^5
//   s consists only of printable ASCII characters.

export function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    const isAlphaNum = (c: string) => /[a-z0-9]/i.test(c);

    while (left < right) {
        if (!isAlphaNum(s[left]!)) { left++; continue; }
        if (!isAlphaNum(s[right]!)) { right--; continue; }

        if (s[left]?.toLowerCase() !== s[right]?.toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
}
