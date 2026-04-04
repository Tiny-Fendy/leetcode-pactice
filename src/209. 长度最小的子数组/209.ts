/**
 * 209. 长度最小的子数组
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的连续子数组，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0 。
 *
 * 示例:
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 *
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 */

function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Infinity;
    let l = 0;
    let total = 0;

    for (let r = 0; r < nums.length; r++) {
        total += nums[r];

        while (total >= target) {
            minLen = Math.min(minLen, r - l + 1);

            total -= nums[l++];
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

export default minSubArrayLen;
