// array 添加元素的方法
const arr = [1, 2];
// arr.push(3); // 尾部
// arr.unshift(0);
// console.log(arr.concat([3,4])) // concat 拼接两个或多个数组，返回新数组
// splice: 用于添加或删除数组中的元素，第一个参数删除或插入的位置，第二个参数为0, 可以作为添加
// 插队: 在第一个元素前插入一项
arr.splice(1, 0, 3);
console.log(arr);