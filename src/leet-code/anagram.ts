function isAnagram(s: string, t: string): boolean {
    const sOrdered = s.split("").sort().join();
    const tOrdered = t.split("").sort().join();
    return sOrdered === tOrdered;
}
