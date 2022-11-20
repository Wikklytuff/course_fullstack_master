// n个节点，代替数组里的每个元素
class Node {
    constructor(element) {
        this.element = element;
        // 链表因为有指针所以不连续，new一个节点，每次都去申请新的内存空间
        // next 指向下一个节点
        this.next = null;
    }
}

class StackBasedLinkedList {
    constructor() {
        this.top = null; // 空栈
    }
    push(value) {
        const node = new Node(value);
        if (this.top === null) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
    }
    pop() {
        if (this.top == null) {
            return -1;
        }

        const value = this.top.element;
        this.top = this.top.next;
        return value;
    }

    clear() {
        this.top = null
    }
    display() {
        if (this.top !== null) {
            let temp = this.top;
            while(temp != null) {
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}

// 可引用文件
module.exports = {
    StackBasedLinkedList,
    Node
}