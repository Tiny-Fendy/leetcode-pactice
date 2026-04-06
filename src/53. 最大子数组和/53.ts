/**
 * 53. 最大子数组和
 * https://leetcode.cn/problems/maximum-subarray/
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分。
 *
 * 示例:
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 * 输入：nums = [1]
 * 输出：1
 *
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 */

function maxSubArray(nums: number[]): number {
    let total = 0;
    let max = Number.NEGATIVE_INFINITY;
    // 过去的total里，最小值是哪个
    let min = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total += num;

        // 计算最大值
        max = Math.max(max, total - min);
        // 迭代前部的最小值
        min = Math.min(min, total);
    }

    return max;
}

export default maxSubArray;
