// es6 可以给函数默认值
function Person(name = '未命名', age) {
    this.name = name; 
    this.age = age;
    this.count = '111';
}

Person.count = 0; // 类， 构造函数的
Person.
// 比this更省内存
Person.prototype = {
    num: 1 
}
let sm = new Person();
console.log(sm.count);
// let sm = new Person('未知',17);
// console.log(sm.name);
// let sm2 = new Person('小红');
// console.log(sm2.name);