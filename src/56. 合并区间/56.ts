/**
 * 56. 合并区间
 * https://leetcode.cn/problems/merge-intervals/
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 * 示例:
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

function merge(intervals: number[][]): number[][] {
    // 先对数组进行排序
    const tem = intervals.sort((a, b) => a[0] - b[0]);
    const result: number[][] = [];

    for (let i = 0; i < tem.length; i++) {
        const cur = tem[i];
        // 获取最后一个元素
        const last = result[result.length - 1];

        if (!last) {
            result.push(cur);
            continue;
        }

        // 判断边界
        if (last[1] < cur[0]) {
            // 没有覆盖到, eg.  last: [1, 3] vs cur: [4, 5]
            result.push(cur);
        } else {
            // 覆盖到了，更新最后一个数组的值
            // eg. last: [1, 5] vs cur: [2, 4] or [2, 6]
            // 合并结果[1, 5] or [1, 6]
            last[1] = Math.max(last[1], cur[1]);
        }
    }

    return result;
}

export default merge;
