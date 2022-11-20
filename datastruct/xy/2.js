// 访问数组的元素 index
// arr[0]
// 如何遍历
const arr = [1,2,3,4,5,6,7,8,9,0];
const len = arr.length;
// for(let i = 0; i < arr.length; i++) { // 不推荐, arr.length每次循环都要查找比较浪费
// 更加机械化适应CPU结构，leetcode算法题常用推荐， 即O(n),更快更省
// for(let i = 0; i < len; i++) { // 设为const常量使length不能修改, 性能更好
//     console.log(arr[i], i); // 通过遍历数组拿到 值 与 下标
// }
// let i = 0;
// for(let item of arr) { // 可读性更好 面向业务 es6的标准 () => {}
//     console.log(item, i);
//     i++;
// }
// 遍历是数据结构的特定行为
// arr.forEach((item, index) => {
//     console.log(item, index)
// })

// arr.map((item, index) => {
//     // 再加工
//     console.log(item, index);
//     return item + 1;
// })