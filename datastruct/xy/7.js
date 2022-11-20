// 栈 数组
// 1. 可以用数组实现
// 2. 受限的数组
//      可以使用push pop 完成数组的增删

// 栈 FILO
const stack = []; // 数组栈

stack.push('东北大板');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('兵工厂');
stack.push('小布丁');

// 遍历 出栈
while(stack.length) {
    // const top = stack.pop();
    const top = stack[stack.length - 1];
    console.log('现在取出的雪糕是:', top);
    stack.pop();
}
