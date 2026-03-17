// Q2. Count Paths That Can Form a Palindrome in a Tree
// You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node 0 consisting of n nodes numbered from 0 to n - 1. The tree is represented by a 0-indexed array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root, parent[0] == -1.

// You are also given a string s of length n, where s[i] is the character assigned to the edge between i and parent[i]. s[0] can be ignored.

// Return the number of pairs of nodes (u, v) such that u < v and the characters assigned to edges on the path from u to v can be rearranged to form a palindrome.

// A string is a palindrome when it reads the same backwards as forwards.

// ---

function countPalindromePaths(parent: number[], s: string): number {
    // A path is valid if it's letters can be rearranged into a palindrome. (At MOST one letter has an odd count).
    // Pick two nodes, look at the letters on the path between them, and that path is good if its letters can be rearranged into a palindrome.

    return 0;
}
