// 立即执行函数
// 1. 匿名函数
// 2. 未赋值给其他变量
// 3. 直接执行
// 函数 this 指向运行环境 作用域与作用域链的概念
(function () {
    // console.log('立即执行')
    let a = 1;
    let ret = 0;
    let res = 0;
    // 执行栈 js运行
    // 将add函数入栈 使add函数处于栈顶（从堆内存中调入执行栈中）
    // 运行add函数，得到返回值并修改ret的值
    ret = add(3, 5);
    // 执行流程回到了匿名函数中
    // 栈的出栈操作
    res = a + ret;
})()
// 匿名函数的出栈操作 执行栈回归全局
// 全局栈 出栈，代码运行结束
let num = 2;
function add(x, y) {
    let sum = 0;
    sum = x + y;
    return sum;
}