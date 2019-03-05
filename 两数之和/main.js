/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// ----------- 执行效率为120ms -----------
/**
 * 暴力破解法 时间复杂度为O(n2) 空间复杂度为O(1)
 */
var twoSum = function (nums, target) {
    for (var i = 0, len = nums.length; i < len; i++) {

        var _f = target - nums[i];

        for (var j = i + 1; j < len; j++) {
            if (_f == nums[j]) return [i, j];
        }

    }
};

/** 第二种做法增加了一个对象 在对象中获取某个值得复杂度为o(1)
 *  不过增加了空间复杂度 空间复杂度为o(n)
 *  时间复杂度为o(n)
 */

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

