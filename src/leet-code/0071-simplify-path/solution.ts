// https://leetcode.com/problems/simplify-path/
//
// You are given an absolute path for a Unix-style file system, which always
// begins with a slash '/'. Convert it to the simplified canonical path.
//
// The rules are:
//   - A single period '.' refers to the current directory.
//   - A double period '..' refers to the parent directory.
//   - Multiple consecutive slashes '//' are treated as a single slash '/'.
//   - Any sequence of periods not covered above should be treated as a
//     valid directory/file name.
//
// The simplified canonical path should:
//   - Always start with a single slash '/'.
//   - Have directories separated by exactly one slash '/'.
//   - Not end with a slash '/' unless it is the root directory.
//   - Not have any single or double periods as part of the path components.
//
// Example 1:
//   Input: path = "/home/"
//   Output: "/home"
//
// Example 2:
//   Input: path = "/home//foo/"
//   Output: "/home/foo"
//
// Example 3:
//   Input: path = "/home/user/Documents/../Pictures"
//   Output: "/home/user/Pictures"
//
// Example 4:
//   Input: path = "/../"
//   Output: "/"
//
// Example 5:
//   Input: path = "/.../a/../b/c/../d/./"
//   Output: "/.../b/d"
//
// Constraints:
//   1 <= path.length <= 3000
//   path consists of English letters, digits, period '.', slash '/' or '_'.
//   path is a valid absolute Unix path.

export function simplifyPath(path: string): string {
    const stack: string[] = [];

    for (const part of path.split("/")) {
        if (part === "" || part === ".") continue;
        if (part === "..") {
            stack.pop();
        } else {
            stack.push(part);
        }
    }

    return "/" + stack.join("/");
}
