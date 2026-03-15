// class Solution {
// public:
//     vector<int> findXSum(vector<int>& nums, int k, int x)
//     {
//         int n = nums.size();
//         vector<int> answer;
//         unordered_map<int, int> freq;

//         // Initialize frequency map for the first window
//         for (int j = 0; j < k; j++) {
//             freq[nums[j]]++;
//         }

//         // Calculate x-sum for the first window
//         answer.push_back(calculateXSum(freq, x));

//         // Slide the window
//         for (int i = 1; i <= n - k; i++) {
//             // Remove the element going out of the window
//             freq[nums[i - 1]]--;
//             if (freq[nums[i - 1]] == 0) {
//                 freq.erase(nums[i - 1]);
//             }

//             // Add the new element coming into the window
//             freq[nums[i + k - 1]]++;

//             // Calculate x-sum for the current window
//             answer.push_back(calculateXSum(freq, x));
//         }

//         return answer;
//     }

// private:
//     int calculateXSum(const unordered_map<int, int>& freq, int x) {
//         // Use a priority queue (max heap) to get the top x elements
//         priority_queue<pair<int, int>> pq; // (frequency, value)

//         for (const auto& entry : freq) {
//             pq.push({entry.second, entry.first});
//         }

//         int sum = 0;
//         for (int i = 0; i < x && !pq.empty(); i++) {
//             auto top = pq.top();
//             pq.pop();
//             sum += top.second * top.first; // sum = value * frequency
//         }

//         return sum;
//     }
// };

function findXSum(nums: number[], k: number, x: number): number[] {
  // I didn't really understand any of that.
  const n = nums.length;

  // 'n - k' because we are looking at windows of size 'k', and the last window starts at index 'n - k'.
  const lastWindowStart = n - k;

  const answer: number[] = [];
  const freq = new Map<number, number>();

  // We need a map of frequencies.
  // We make one for the first window we're looking at, which is the first 'k' elements of the array.
  // Then we calculate the x-sum for that window, which is the sum of the 'x' most frequent elements in that window.

  // Initialize frequency map for the first window:
  for (let j = 0; j < k; j++) {
    const newFreq = freq.get(nums[j]) ?? 0;
    freq.set(nums[j], newFreq + 1);
  }

  // Calculate x-sum for the first window
  answer.push(calculateXSum(freq, x));

  // Slide the window
  // 'n - k' because
  for (let i = 1; i <= lastWindowStart; i++) {
    // Remove the element going out of the window
    freq.set(nums[i - 1], (freq.get(nums[i - 1]) ?? 0) - 1);

    // Remove the element from the map if its frequency becomes 0
    if (freq.get(nums[i - 1]) === 0) freq.delete(nums[i - 1]);

    // Add the new element coming into the window.
    // TODO: Why is this 'i + k - 1' and not just 'i + 1'?
    // Because i = current position, k = elements in window, k - 1 is last element in that window. So, the right element is i + k - 1
    freq.set(nums[i + k - 1], (freq.get(nums[i + k - 1]) ?? 0) + 1);

    answer.push(calculateXSum(freq, x));
  }

  return answer;
}

// 'x' here means the 'x' most frequent elements in the current window of size 'k'. We need to calculate the sum of those 'x' most frequent elements for each window of size 'k' as we slide through the array.
function calculateXSum(freq: Map<number, number>, x: number): number {
  // TODO: Why?
  if (x <= 0) return 0;

  const entries = Array.from(freq.entries()); // [value, frequency][]
  // TODO: I don't understand why we're sorting like this. What does this even mean?
  entries.sort(([v1, f1], [v2, f2]) => f2 - f1 || v2 - v1);

  let sum = 0;
  for (let i = 0; i < x && i < entries.length; i++) {
    const [value, frequency] = entries[i];
    sum += value * frequency;
  }

  return sum;
}
