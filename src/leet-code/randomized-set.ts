class RandomizedSet {
    //You must implement the functions of the class such that each function works in average O(1) time complexity.
    private values: number[];
    private valueToIndexMap: Map<number, number>;

    constructor() {
        this.values = [];
        this.valueToIndexMap = new Map<number, number>();
    }

    insert(val: number): boolean {
        //Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.

        if (this.valueToIndexMap.has(val)) return false;

        // We store this both in an array, as well as in the map, for fast access.
        this.values.push(val);
        this.valueToIndexMap.set(val, this.values.length - 1);
        return true;
    }

    remove(val: number): boolean {
        //Removes an item val from the set if present. Returns true if the item was present, false otherwise.

        if (this.values.length === 0) return false;

        const element: number | undefined = this.valueToIndexMap.get(val);
        if (element === undefined) return false;

        // Pop & Swap for O(1) deletion.
        const lastArrayValue = this.values.pop();
        this.valueToIndexMap.delete(val);

        if (this.values[element] === undefined || lastArrayValue === undefined) return true;

        this.values[element] = lastArrayValue;
        this.valueToIndexMap.set(lastArrayValue, element);
        return true;
    }

    getRandom(): number {
        //Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
        // The complicated part is returning a random one, because it's hard to return things in and of itself.
        const randomValue: number = Math.floor(Math.random() * this.values.length);
        return this.values[randomValue] ?? 0;
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
