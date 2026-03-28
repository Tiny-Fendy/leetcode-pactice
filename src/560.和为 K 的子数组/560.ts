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
    const map = new Map<number, number>();
    let count = 0;
    let total = 0;

    for (const num of nums) {
        const current = map.get(total) || 0;

        // 先设置
        map.set(total, current + 1);

        // 更新total值，然后查询
        total += num;

        if (map.has(total - k)) {
            count += (map.get(total - k) || 0);
        }
    }

    return count;
}

export default subarraySum;
