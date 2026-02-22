import { test, expect } from "bun:test";
import { groupAnagrams } from "./solution";

test("groups anagrams together", () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const sorted = result.map((g) => g.sort()).sort((a, b) => a[0]!.localeCompare(b[0]!));
    expect(sorted).toEqual([["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]);
});

test("empty string", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
});

test("single element", () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
});
