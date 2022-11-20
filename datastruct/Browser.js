// 浏览器前进后退功能
// 1. 面向对象模块化的思想中，一个文件就写一个类
// 2. 引入其他模块
const { StackBasedLinkedList } = require('./StackBaseOnLinkedList');
console.log(StackBasedLinkedList);
class Browser {
    constructor() {
        this.normalStack = new StackBasedLinkedList();
        this.backStack = new StackBasedLinkedList();
    }
    pushNormal(name) {
        // 要访问新的地址时 y栈要清空
        this.normalStack.push(name); // 浏览网页入栈
        this.backStack.clear(); // abc b -> d c就丢失了即清空Y栈
        this.displayAllStack();
    }
    back() {
        // 1. normalStack pop
        // 2. backStack push
        // 3. 边界
        const value = this.normalStack.pop()
        if (value !== -1) {
            // 可以出栈or回退
            this.backStack.push(value);
            this.displayAllStack();
        } else {
            // 不可出栈or回退 
            console.log('无法后退');
        }
    }
    front() {
        const value = this.backStack.pop();
        if (value !== -1) {
            // 可以前进
            this.normalStack.push(value);
            this.displayAllStack();
        } else {
            console.log('无法前进');
        }
    }
    displayAllStack() {
        console.log(' ----前进页面---- ');
        this.backStack.display();
        console.log(' ----浏览页面---- ');
        this.normalStack.display();
    }
}

let browser = new Browser();
// 浏览器历史记录依次有了谷歌百度github
browser.pushNormal('www.google.com');
browser.pushNormal('www.baidu.com');
browser.pushNormal('www.github.com');
// 回退两次 浏览页面为谷歌
browser.back();
browser.back();
// 前进一次 浏览页面为百度
browser.front();
// 重新访问新的浏览页面 天猫
browser.pushNormal('www.tmall.com');