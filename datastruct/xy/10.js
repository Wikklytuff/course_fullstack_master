function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
n1.next = n2;
const n3 = new ListNode(3);
n2.next = n3;
// 某两个节点中插入一个节点
// n1.next = n3;
// n3.next = n2;
// 在某节点后插入一个节点
// node3.next = n1.next;
// n1.next = node3;
const target = node1.next;
node1.next = target.next;