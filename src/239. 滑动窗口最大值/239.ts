/**
 * 239. 滑动窗口最大值
 * https://leetcode.cn/problems/sliding-window-maximum/
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。
 *
 * 示例:
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 */


function maxSlidingWindow(nums: number[], k: number): number[] {
    const target: number[] = [];
    // 双端队列，单调递减
    const stack: number[] = [];

    for (let r = 0;r < nums.length;r++) {
        const num = nums[r];

        // 维护双端队列，队列最左边的值就是当前滑动窗口的最大值，
        // 从队尾判断逐个删除，比从前面开始找性能要更好，因为pop操作性能优于splice
        while (stack.length && nums[stack[stack.length - 1]] <= num) {
            stack.pop();
        }

        // 去掉窗口之外的值，只滑动了一位，所以只需要判断一下即可
        if (stack[0] <= r - k) {
            stack.shift();
        }

        // 加入新的数
        stack.push(r);

        // 滑动窗口长度已经被完整了
        if (r >= k - 1) {
            target.push(nums[stack[0]]);
        }

    }

    return target;
}

export default maxSlidingWindow;
