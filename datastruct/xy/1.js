// 怎么创建数组
// - 数据结构 对代码的优化是有意义的
// - 平时开发中， 算法用的少一些
// - 针对面试学习
// - 刷题 leetcode js 
// 基本数据结构 为访问第几个元素的行文提供时间复杂度O(1)
// const arr = []; // length, items类型都未定
// 使用构造函数不是为了创建空数组
// 数组相对于链表更易用，默认用数组来实现
// const arr = new Array(7) // <7 empty items>
// console.log(arr);
const arr = (new Array(7)).fill(1);
console.log(arr);