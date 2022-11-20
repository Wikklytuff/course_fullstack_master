// 二维数组 矩阵
// 链表  不连续 | 离散的
// arr 栈与队列的优势
// 下标访问 O(1) API丰富好理解
// 链表 缺点: 比数据项多一个指针 
//      优点: 便于插入删除
// 指针
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// const n1 = new ListNode(1);
// const n2 = new ListNode(2);
// const n3 = new ListNode(3);
// n1.next = n2;
// n2.next = n3;
// 1. val + 下个节点的地址 | null
// 2. 对象是什么类型? object 复杂 引用
// 3. 一个节点赋值给另一个节点的next属性
// { 
//     val: 1, 
//     next: {
//         val: 3,
//         next: null
//     }
// }