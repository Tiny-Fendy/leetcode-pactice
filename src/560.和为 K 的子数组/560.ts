/**
 * 560. 和为 K 的子数组
 * https://leetcode.cn/problems/subarray-sum-equals-k/
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 *
 * 示例:
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 *
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 */

function subarraySum(nums: number[], k: number): number {
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        // 获取滑块内的数
        nums.slice(l, r).reduce((pre, currentValue) => pre + currentValue, 0)

    }

    return 0;
}

export default subarraySum;
