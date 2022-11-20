<<<<<<< HEAD
// JS 解决实例和类之间的关系
// 面向对象语言中 class 
// java中this属于 class 方法之间, 共享属性和方法 this.
// JS 在函数中引入了this  以new的方式来运行不需要返回对象(call constructor),
// 函数看过去更像构造函数 this -> 实例化后的对象

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// 2.js + 3.js
let cat1 = new Cat('大毛', '黄色');
let cat2 = new Cat('二毛', '黑色');
console.log(cat1.constructor) // 验证父子关系
console.log(cat1.constructor == cat2.constructor); // 验证兄弟

console.log(cat1.__proto__, cat1.__proto__ == cat2.__proto__);
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor);
console.log(cat1 instanceof Cat);
console.log(Cat.prototype.isPrototypeOf(cat1));
=======
// JS 解决实例和类之间的关系
// 面向对象语言中 class 
// java中this属于 class 方法之间, 共享属性和方法 this.
// JS 在函数中引入了this  以new的方式来运行不需要返回对象(call constructor),
// 函数看过去更像构造函数 this -> 实例化后的对象

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// 2.js + 3.js
let cat1 = new Cat('大毛', '黄色');
let cat2 = new Cat('二毛', '黑色');
console.log(cat1.constructor) // 验证父子关系
console.log(cat1.constructor == cat2.constructor); // 验证兄弟

console.log(cat1.__proto__, cat1.__proto__ == cat2.__proto__);
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor);
console.log(cat1 instanceof Cat);
console.log(Cat.prototype.isPrototypeOf(cat1));
>>>>>>> 4336100b51fb52fa4c574f514e1cf57c84de7918
