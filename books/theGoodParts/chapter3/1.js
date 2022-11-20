//let 是js es6 变量声明的关键字
// 1. 变量名num 代表值所在的空间，
// 在内存中声明了一个空间地址
// 2. index.html 运行在浏览器中，
//     js 是唯一语言
// 3. 控制台通过变量名找到全局变量
// num：number = "fdf" 静态语言 c c++ java
// js 是弱类型语言，不太严格，易上手
let num; // 申明num变量， 数据类型是什么？
console.log(typeof num); //typeof 变量的类型 undefined 类未定
// js 变量的类型由值决定 
num = 33; // 数字类型
num = '掌柜';
// 常量 
const name = '字符串';//字符串
// 命名规则
// 1. 解决了js 弱类型的问题
let isSingle = true;
    // boolSingle = 23;

let numPrice = 12.3;
let trouble = null; // 声明变量且值为空
    trouble = 1;