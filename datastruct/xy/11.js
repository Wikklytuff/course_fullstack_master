// 数组在leetcode 题目 两数相加
//  数组相关的算法 排序(冒泡 两重for, 插入), 二分算法(有效提升效率), 动态规划
// 冒泡 暴力解决 两重for 循环 i j nums

// 1. 基本思路 两层循环
// 2. 反思
// 算法超时 O(n^2) 用空间(廉价的软盘)换时间(贵价), 优化成一层循环
// [] O(1)   {}  key:val O(1)
nums = [2,7,11,15];
const target = 9;
let obj = {}; // key val
for (let i = 0; i < nums.length; i++) {
    // num[i] 2 7 11 15
    // target num[i] + obj val = target
    // 差的算法
    // target - num[i] -> obj 里面 -> 2 key
    // 下标 i 
}
