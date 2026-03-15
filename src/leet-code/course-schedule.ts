
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const state = new Array(numCourses).fill(0);
    const graph: number[][] = Array.from({ length: numCourses }, () => []);

    // All the courses you can reach from prerequisite b.
    for (const [a, b] of prerequisites) {
        graph[b].push(a);
    }

    // Returns true if we found a cycle.
    function dfs(course: number): boolean {
        if (state[course] === 1) return true;
        if (state[course] === 2) return false;

        state[course] = 1;

        for (const next of graph[course]) {
            if (dfs(next)) return true;
        }

        state[course] = 2;
        return false;
    }

    for (let course = 0; course < numCourses; course++) {
        if (dfs(course)) return false;
    }

    return true;
};