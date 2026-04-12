/**
 * 189. 轮转数组
 * https://leetcode.cn/problems/rotate-array/
 *
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 *
 * 示例:
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 *
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释:
 * 向右轮转 1 步: [99,-1,-100,3]
 * 向右轮转 2 步: [3,99,-1,-100]
 */

// 注意：需要原地修改数组，不要返回新数组
function rotate(nums: number[], k: number): void {
    if (k === nums.length) {
        return;
    }

    if (k > nums.length) {
        k = k % nums.length;
    }

    const tem = nums.slice(-k);
    const yu = nums.length - k;

    for (let i = nums.length - 1;i >= 0;i--) {
        // [1,2,3, 4,5,6,7]，i > 4的时候
        if (i > k - 1) {
            // 即4,5,6,7 i > 2
            // nums[i = 6] = nums[i = 4]
            // nums[i] = nums[i - (k - 1)]
            nums[i] = nums[i - k];
        } else {
            nums[i] = tem[i];
        }
    }
}

export default rotate;
