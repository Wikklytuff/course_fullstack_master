/**
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]} 
 */
const twoSum = function(nums, target) {
    // 用空间换时间, 减少一重循环, 创建一个表diffs, 查找diffs里有没有target - nums[i]的值
    const diffs = {};
    // 缓存数组的长度
    const len = nums.length;
    // 遍历数组
    for (let i = 0; i < len; i++) {
        if(diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i]
        } else {
            // key值不存在则存入diffs表中
            diffs[nums[i]] = i;
        }
    }
}