/**
 * 41. 缺失的第一个正数
 * https://leetcode.cn/problems/first-missing-positive/
 *
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 *
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 *
 * 示例:
 * 输入：nums = [1,2,0]
 * 输出：3
 * 解释：范围 [1,2] 中的数字都在数组中。
 *
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 * 解释：1 在数组中，但 2 不在。
 *
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 * 解释：最小的正数 1 没有出现。
 */

// 标准的数字原地调换法
function firstMissingPositive(nums: number[]): number {
    for (let i = 0;i <nums.length;i++) {
        // 1. 当前位置的数字不对
        // 2. 当前位置编号大于0
        // 3. 处理重复数字，要调换的目标序号
        // 4. 对换的目标的值存在，比如超出数组长度
        while (nums[i] > 0 && nums[i] !== i + 1 && nums[i] < nums.length && nums[nums[i] - 1] !== nums[i]) {
            // 执行调换，顺序很重要!
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    for (let i = 0;i < nums.length;i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return nums.length + 1;
}

export default firstMissingPositive;
