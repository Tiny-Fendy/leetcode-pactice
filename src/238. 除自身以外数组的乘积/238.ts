/**
 * 238. 除自身以外数组的乘积
 * https://leetcode.cn/problems/product-of-array-except-self/
 *
 * 给你一个整数数组 nums，返回数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 *
 * 题目数据保证数组 nums 之中任意元素的全部前缀元素和后缀的乘积都在 32 位整数范围内。
 *
 * 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 *
 * 示例:
 * 输入: nums = [1,2,3,4]
 * 输出: [24,12,8,6]
 *
 * 输入: nums = [-1,1,0,-3,3]
 * 输出: [0,0,9,0,0]
 */

// 空间复杂度O(1)，直接把结果合并计算到结果数组上
function productExceptSelf(nums: number[]): number[] {
    // 注意：不能使用除法，需要在 O(n) 时间内完成
    const result: number[] = [];

    for (let i = nums.length - 1;i >= 0;i--) {
        if (i === nums.length - 1) {
            result.unshift(1);
        } else {
            result.unshift(nums[i + 1] * result[0]);
        }
    }

    let lNum = 1;

    for (let i = 0;i < nums.length;i++) {
        const cur = lNum * result[i];

        // 处理-0
        result[i] = cur === 0 ? Math.abs(cur) : cur;
        lNum *= nums[i];
    }

    return result;
}

export default productExceptSelf;
