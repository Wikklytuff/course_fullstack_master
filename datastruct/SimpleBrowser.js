// js 早期版本没有class关键字
// es6提供了，但class并未改变底层原型式面向对象
// class 传统面向对象 像java一样写js
class SimpleBrowser {
    constructor(){
        this.x = 1;
    }
    push() {

    }
}

const browser = new SimpleBrowser();
for (let key in browser) {
    console.log(key);
}
console.log("push" in browser);
// {}
// console.log(browser.__proto__);
// [object:null prototypr] {}
// console.log(browser.__proto__.__proto__);
// {}
// console.log(browser.__proto__.constructor.prototype);
// browser可以调用push
// browser.push();

