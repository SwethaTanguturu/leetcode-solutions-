/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    if(strs.length == 0) return "";
    let left = strs[0] , right= strs[strs.length-1];
    let res=""
    for(let i = 0; i<left.length; i++){
        if(left[i] == right[i]){
            res += left[i];
        }else{
            break;
        }
    }

    return res;
};