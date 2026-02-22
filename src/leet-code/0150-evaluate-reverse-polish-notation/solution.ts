// https://leetcode.com/problems/evaluate-reverse-polish-notation/
//
// You are given an array of strings tokens that represents an arithmetic
// expression in Reverse Polish Notation.
//
// Evaluate the expression. Return an integer that represents the value
// of the expression.
//
// Note:
//   - The valid operators are '+', '-', '*', and '/'.
//   - Each operand may be an integer or another expression.
//   - The division between two integers always truncates toward zero.
//   - There will not be any division by zero.
//   - The input represents a valid arithmetic expression in RPN.
//   - The answer and all intermediate calculations fit in a 32-bit integer.
//
// Example 1:
//   Input: tokens = ["2","1","+","3","*"]
//   Output: 9
//   Explanation: ((2 + 1) * 3) = 9
//
// Example 2:
//   Input: tokens = ["4","13","5","/","+"]
//   Output: 6
//   Explanation: (4 + (13 / 5)) = 6
//
// Example 3:
//   Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
//   Output: 22
//
// Constraints:
//   1 <= tokens.length <= 10^4
//   tokens[i] is either an operator or an integer in the range [-200, 200].

const OPERATORS: Record<string, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
};

export function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token in OPERATORS) {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(OPERATORS[token]!(a, b));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop()!;
}
