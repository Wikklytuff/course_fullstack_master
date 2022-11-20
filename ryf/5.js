<<<<<<< HEAD
function Cat(name, color) {
    this.name = name;
    this.color = color;
    // 浪费内存 应该共享而不是每个实例都需要这个属性
    // 需要一个指向新的, 构造函数之外的
    // this.type = '猫科动物'; // 不会改变的属性
    // this.eat = function() {
    //     console.log('eat 老鼠');
    // }
}
// 1. 省内存
// 2. 所有实例共享prototype对象上的属性和方法
// 3. 实例是如何共享prototype对象的？ -》 this
// 4. this -> constructor + prototype 上的
// 如何区分 对象本身的属性(constuctor), prototype 对象上的属性？
Cat.prototype.eat = function() {
    console.log('eat 老鼠');
}
Cat.prototype.type = '猫科动物';


let cat1 = new Cat('Tom', '黑色'); // 分配了一个新的内存空间
let cat2 = new Cat('小灰灰', '灰色');

console.log(cat1.hasOwnProperty('name'),cat2.hasOwnProperty('type'));
// 首先到 OwnProperties 去查找, 如果有就返回, 没有就到prototype对象上去找
// JS为了省内存
// JS通过什么语法来实现？  __proto__只要在原型对象上, 也可以直接调用
console.log(cat2.name, cat2.type, cat2.__proto__.type);
// Object 的 原型链
console.log(cat2.toString());
// {}
=======
function Cat(name, color) {
    this.name = name;
    this.color = color;
    // 浪费内存 应该共享而不是每个实例都需要这个属性
    // 需要一个指向新的, 构造函数之外的
    // this.type = '猫科动物'; // 不会改变的属性
    // this.eat = function() {
    //     console.log('eat 老鼠');
    // }
}
// 1. 省内存
// 2. 所有实例共享prototype对象上的属性和方法
// 3. 实例是如何共享prototype对象的？ -》 this
// 4. this -> constructor + prototype 上的
// 如何区分 对象本身的属性(constuctor), prototype 对象上的属性？
Cat.prototype.eat = function() {
    console.log('eat 老鼠');
}
Cat.prototype.type = '猫科动物';


let cat1 = new Cat('Tom', '黑色'); // 分配了一个新的内存空间
let cat2 = new Cat('小灰灰', '灰色');

console.log(cat1.hasOwnProperty('name'),cat2.hasOwnProperty('type'));
// 首先到 OwnProperties 去查找, 如果有就返回, 没有就到prototype对象上去找
// JS为了省内存
// JS通过什么语法来实现？  __proto__只要在原型对象上, 也可以直接调用
console.log(cat2.name, cat2.type, cat2.__proto__.type);
// Object 的 原型链
console.log(cat2.toString());
// {}
>>>>>>> 4336100b51fb52fa4c574f514e1cf57c84de7918
console.log(cat2.__proto__.__proto__.__proto__)