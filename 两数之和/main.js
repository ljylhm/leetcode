/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// ----------- 执行效率为120ms -----------
var twoSum = function (nums, target) {
    for (var i = 0, len = nums.length; i < len; i++) {

        var _f = target - nums[i];

        for (var j = i + 1; j < len; j++) {
            if (_f == nums[j]) return [i, j];
        }

    }
};

