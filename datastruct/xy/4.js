// const arr = (new Array(7)).fill([]); // [] 引用式赋值
// // console.log(arr);
// arr[0][0] = 1;
// console.log(arr);
// 初始化一个二维数组
const arr = new Array(7); // 7行
const len = arr.length;

for (let i = 0; i < len; i++) {
    arr[i] = []; // new Array()
}