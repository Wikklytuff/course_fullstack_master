<<<<<<< HEAD
// 化实例化的繁为函数封装的简, 一定要用this ?
// 构造函数, 封装实例化过程, 更加简便
function Cat(name, color) {
    // this
    return {
        name: name,
        color:color
    }
}
let obj = new Object();
let cat1 = Cat('Tom', '黑色');
console.log(cat1.name, cat1.color);
=======
// 化实例化的繁为函数封装的简, 一定要用this ?
// 构造函数, 封装实例化过程, 更加简便
function Cat(name, color) {
    // this
    return {
        name: name,
        color:color
    }
}
let obj = new Object();
let cat1 = Cat('Tom', '黑色');
console.log(cat1.name, cat1.color);
>>>>>>> 4336100b51fb52fa4c574f514e1cf57c84de7918
console.log(cat1.constructor);