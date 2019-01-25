/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// ----------- 执行效率约174ms -----------
var addTwoNumbers = function (l1, l2) {

    let reverse = (str) => str.split("").reverse().join("");

    let findAll = function (l) {

        let _l = l,
            _str = "";

        while (_l.next != null) {
            _str = _str + _l.val;
            _l = _l.next;
        }

        return reverse(_str + _l.val);

    }

    let insertNode = function (num) {
        num = num + "";

        let head = null,
            last = null;
        for (let i of num.split("")) {
            if (head == null) {
                head = new ListNode(i);
                last = head;
            } else {
                let _new = new ListNode(i);
                last.next = _new;
                last = _new;
            }
        }

        return head;

    }


    // ---- 大整数计算 ----
    var add = (...args) => {
        let _x = 0;
        for (let i of args) {
            _x = _x + Number(i)
        }
        let _y = _x >= 10 ? { m: 1, n: _x - 10 } : { m: 0, n: _x }
        return _y;
    }

    // 添加长度至相同的长度
    var addLength = (s1, num) => {
        return new Array(num + 1).join("0") + s1;
    }

    // 默认第一个是较大长度
    var merge = (s1, s2) => {
        s1 = s1.split("");
        s2 = addLength(s2, s1.length - s2.length).split("");
        let _t = 0,
            _str = "";

        for (var i = s1.length - 1; i >= 0; i--) {
            let z = add(s1[i], s2[i], _t);
            _str = z.n + _str
            _t = z.m;
        }
        if (_t == 1) _str = _t + _str;

        return _str;
    }

    var Main = (s1, s2) => {
        if (s1.length > s2.length) return merge(s1, s2);
        return merge(s2, s1)
    }

    return insertNode(reverse(Main(findAll(l1), findAll(l2))))

};