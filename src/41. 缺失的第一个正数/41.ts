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

function firstMissingPositive(nums: number[]): number {
    // 要求：时间复杂度 O(n)，空间复杂度 O(1)
    const map = new Map<number, number>();
    let min = 1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num <= 0) {
            continue;
        }

        map.set(num, 1);

        // 找到map中不存在的最小的数
        while (map.has(min)) {
            // 去掉这个数
            map.delete(min);
            min++;
        }
    }

    return min;
}

export default firstMissingPositive;
