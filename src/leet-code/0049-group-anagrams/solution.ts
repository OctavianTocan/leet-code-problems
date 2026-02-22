// https://leetcode.com/problems/group-anagrams/
//
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
//
// Example 1:
//   Input: strs = ["eat","tea","tan","ate","nat","bat"]
//   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Example 2:
//   Input: strs = [""]
//   Output: [[""]]
//
// Example 3:
//   Input: strs = ["a"]
//   Output: [["a"]]
//
// Constraints:
//   1 <= strs.length <= 10^4
//   0 <= strs[i].length <= 100
//   strs[i] consists of lowercase English letters.

export function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const key = str.split("").sort().join("");
        const group = map.get(key) ?? [];
        group.push(str);
        map.set(key, group);
    }

    return [...map.values()];
}
