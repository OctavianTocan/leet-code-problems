import { test, expect } from "bun:test";
import { topKFrequent } from "./solution";

test.todo("top 2 frequent", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2).sort()).toEqual([1, 2]);
});

test.todo("single element", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
});
