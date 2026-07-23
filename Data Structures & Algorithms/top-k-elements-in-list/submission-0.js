class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};
        for (const num of nums) {
            countMap[num] = (countMap[num] || 0) + 1;
        }

        const freqArray = Object.entries(countMap);
        freqArray.sort((a, b) => b[1] - a[1]);

        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(Number(freqArray[i][0]));
        }
        return result;
    }
}
