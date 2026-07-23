class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];
        const visited = new Array(strs.length).fill(false);

        const isAnagram = (s1, s2) => {
            if (s1.length !== s2.length) return false;
            const count = new Array(26).fill(0);
            for (let i = 0; i < s1.length; i++) {
                count[s1.charCodeAt(i) - 97]++;
                count[s2.charCodeAt(i) - 97]--;
            }
            return count.every((c) => c === 0);
        };

        for (let i = 0; i < strs.length; i++) {
            if (visited[i]) continue;
            const currentGroup = [strs[i]];
            visited[i] = true;

            for (let j = i + 1; j < strs.length; j++) {
                if (!visited[j] && isAnagram(strs[i], strs[j])) {
                    currentGroup.push(strs[j]);
                    visited[j] = true;
                }
            }
            result.push(currentGroup);
        }
        return result;
    }
}
