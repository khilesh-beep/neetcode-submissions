class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arr1 = s.split('').sort();
        const arr2 = t.split('').sort();
        if(arr1.length !== arr2.length) return false;
        for(let i =0;i<arr1.length;i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
        
    }
}
