function func(num) {
    // this 指向谁， this.count++ 就是谁的
    // 1. new this -> 实例   大写作为构造函数  
    // 2. window || global || use strict
    // 3. call || apply
    this.count++; // 实例，不属于 类
}
var count = 5;
let obj = new func(1); // 实例
console.log(obj instanceof func);
// func 一等对象 count属性属于 func 自己的
func.count = 0; // -> 4
func(0); // 普通函数
console.log(func.count); //  仍为 0 ，与外面命名的count=5一点关系都没有