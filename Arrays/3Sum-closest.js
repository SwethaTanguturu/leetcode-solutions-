/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a-b );
    let closest_sum = nums[0] + nums[1] + nums[2];
    for(i=0;i<nums.length;i++){
        let j = i+1; let k= nums.length-1;
        while(j<k){
        let sum = nums[i] + nums[j] + nums[k];
        if(sum==target){
            return sum;
        }
        else if(sum < target){
            j++;
        }else {
            k--;
        }
        if(Math.abs(sum-target) < Math.abs(closest_sum -target)){
            closest_sum = sum;
        }
        }
        
    }
    return closest_sum;
};