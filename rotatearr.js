var rotate = function(nums, k) {
    
   let n = nums.length;
     k %= n;
        reverse(nums, n - k, n - 1);
        reverse(nums, 0, n - 1);
        reverse(nums, k, n - 1);
    }
    
   const reverse = function(nums, l,  r) {
        for(let j = 0; j < (r - l + 1) / 2; j++) {
            let temp = nums[l + j];
            nums[l + j] = nums[r - j];
            nums[r - j] = temp;
        }
    }




/*
Success
Details 
Runtime: 96 ms, faster than 99.04% of JavaScript online submissions for Rotate Array.
Memory Usage: 46.6 MB, less than 77.91% of JavaScript online submissions for Rotate Array.
Next challenges:
*/
