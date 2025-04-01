/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b );

    const res= [];
    for(i=0;i<nums.length-2;i++){
        if(nums[i] == nums[i-1]) continue;
        let j = i+1 , k = nums.length-1;
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k];

            if(sum==0){
                res.push([nums[i], nums[j], nums[k]]);
                while(nums[j] == nums[j+1]) j++;
                while(nums[k] == nums[k-1]) k--;
                j++;
                k--;
            }else if(sum < 0){
                j++;
            }
            else{

                k--;
            }
        }
    }
    return res;

};