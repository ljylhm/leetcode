# leetcode
这段时间开始做leetcode的题目了，题目几乎都是用nodeJs完成的，全当是自己的记录吧，有的问题虽然已经通过，但是执行时间很长，希望这些问题也能在后期得到优化，2019，fighting。

## 两数之和
对于两数之和的题目又有了新的想法，通过空间来换取时间，增加一个对象来映射索引和真实值的关系，然后只需通过一层循环找到对应的两个数。时间复杂度由O(n2)降为O(n) 空间复杂度从O(1)变成O(n)

```javascript
    var twoSum1 = function (nums, target) {
    let mapObj = {}
    let res = []
    let len = nums.length
    nums.forEach((e, i) => {
        mapObj[e] = i
    });

    for (let i = 0; i < len; i++) {
        let j = mapObj[target - nums[i]]
        if (j && j != i) {
            res = i < j ? [i, j] : [j, i]
        }
    }
    return res
}
```
