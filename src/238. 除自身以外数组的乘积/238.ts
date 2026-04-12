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

// 常规的两个数组分别保存前后缀积时间复杂度O(n)，O(n)
function productExceptSelf(nums: number[]): number[] {
    // 注意：不能使用除法，需要在 O(n) 时间内完成
    const tl: number[] = [];
    const tr: number[] = [];
    const result: number[] = [];

    for (let i = 0;i < nums.length;i++) {
        const lNum = nums[i];
        const rNum = nums[nums.length - 1 - i];

        if (i === 0) {
            tl.push(lNum);
            tr.unshift(rNum);
        } else {
            tl.push(tl[i - 1] * lNum);
            tr.unshift(tr[0] * rNum);
        }
    }

    // [1, 2, 3, 4]
    // tl [1, 2, 6, 24]
    // tr [24, 24, 12, 4]
    // 1 * 24, 1 * 12, 2 * 4, 6 * 1
    // (tl[i - 1] || 1) * (tr[i + 1] || 1)
    for (let i = 0;i < nums.length;i++) {
        let num = 0;

        if (i === 0) {
            num = tr[1];
        } else if (i === nums.length - 1) {
            num = tl[i - 1];
        } else {
            num = tl[i - 1] * tr[i + 1];
        }

        result.push(num ? num : 0);
    }

    return result;
}

export default productExceptSelf;
