# 🧠 LeetCode Solutions

My daily LeetCode practice — solutions written in **TypeScript**, tested with **Bun**.

## 📊 Progress

| #   | Problem                                                                                                  | Difficulty | Category         | Solution                                                                    |
| --- | -------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | --------------------------------------------------------------------------- |
| 1   | [Two Sum](https://leetcode.com/problems/two-sum/)                                                        | 🟢 Easy    | Arrays & Hashing | [solution](src/leet-code/0001-two-sum/solution.ts)                          |
| 4   | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)                | 🔴 Hard    | Binary Search    | [solution](src/leet-code/0004-median-of-two-sorted-arrays/solution.ts)      |
| 20  | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)                                    | 🟢 Easy    | Stack            | [solution](src/leet-code/0020-valid-parentheses/solution.ts)                |
| 49  | [Group Anagrams](https://leetcode.com/problems/group-anagrams/)                                          | 🟡 Medium  | Arrays & Hashing | [solution](src/leet-code/0049-group-anagrams/solution.ts)                   |
| 71  | [Simplify Path](https://leetcode.com/problems/simplify-path/)                                            | 🟡 Medium  | Stack            | [solution](src/leet-code/0071-simplify-path/solution.ts)                    |
| 108 | [Convert Sorted Array to BST](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | 🟢 Easy    | Trees            | [solution](src/leet-code/0108-convert-sorted-array-to-bst/solution.ts)      |
| 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)                                      | 🟢 Easy    | Two Pointers     | [solution](src/leet-code/0125-valid-palindrome/solution.ts)                 |
| 150 | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)      | 🟡 Medium  | Stack            | [solution](src/leet-code/0150-evaluate-reverse-polish-notation/solution.ts) |
| 167 | [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)                            | 🟡 Medium  | Two Pointers     | [solution](src/leet-code/0167-two-sum-ii/solution.ts)                       |
| 207 | [Course Schedule](https://leetcode.com/problems/course-schedule/)                                        | 🟡 Medium  | Graphs           | [solution](src/leet-code/0207-course-schedule/solution.ts)                  |
| 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)                                  | 🟢 Easy    | Arrays & Hashing | [solution](src/leet-code/0217-contains-duplicate/solution.ts)               |
| 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/)                                            | 🟢 Easy    | Arrays & Hashing | [solution](src/leet-code/0242-valid-anagram/solution.ts)                    |
| 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)                        | 🟡 Medium  | Arrays & Hashing | [solution](src/leet-code/0347-top-k-frequent-elements/solution.ts)          |
| 704 | [Binary Search](https://leetcode.com/problems/binary-search/)                                            | 🟢 Easy    | Binary Search    | [solution](src/leet-code/0704-binary-search/solution.ts)                    |

### Practice Problems

| Problem                              | Category | Solution                                                                   |
| ------------------------------------ | -------- | -------------------------------------------------------------------------- |
| Longest Balanced Subarray            | Arrays   | [solution](src/leet-code/longest-balanced-subarray/solution.ts)            |
| Longest Balanced Substring II        | Strings  | [solution](src/leet-code/longest-balanced-substring-ii/solution.ts)        |
| Median Fair Segment with Target Pair | Arrays   | [solution](src/leet-code/median-fair-segment-with-target-pair/solution.ts) |

### Bonus: Real-World Applications

| Topic          | Description                                              | Link                                         |
| -------------- | -------------------------------------------------------- | -------------------------------------------- |
| Sliding Window | Audio silence detection using the sliding window pattern | [project](src/real-world/01-sliding-window/) |

## 🏗️ Project Structure

```
src/
├── leet-code/
│   ├── 0001-two-sum/
│   │   ├── solution.ts        # Solution with problem description
│   │   └── solution.test.ts   # Test cases
│   ├── 0004-median-of-two-sorted-arrays/
│   ├── ...
│   └── 0704-binary-search/
└── real-world/
    └── 01-sliding-window/     # Python audio processing example
```

Each problem follows a consistent structure:

- **`solution.ts`** — The solution with the full problem description in comments and a link to the LeetCode problem
- **`solution.test.ts`** — Test cases covering examples from the problem and edge cases

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.2+)

### Install & Run Tests

```bash
# Install dependencies
bun install

# Run all tests
bun test

# Run a specific problem's tests
bun test src/leet-code/0001-two-sum/solution.test.ts
```

## 📈 Topics Covered

- **Arrays & Hashing** — Two Sum, Contains Duplicate, Valid Anagram, Group Anagrams, Top K Frequent Elements
- **Two Pointers** — Valid Palindrome, Two Sum II
- **Stack** — Valid Parentheses, Simplify Path, Evaluate Reverse Polish Notation
- **Binary Search** — Binary Search, Median of Two Sorted Arrays
- **Trees** — Convert Sorted Array to BST
- **Graphs** — Course Schedule (DFS cycle detection)
