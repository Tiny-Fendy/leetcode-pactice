/**
 * 240. 搜索二维矩阵 II
 * https://leetcode.cn/problems/search-a-2d-matrix-ii/
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * - 每行的元素从左到右升序排列
 * - 每列的元素从上到下升序排列
 *
 * 示例 1:
 * 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * 输出：true
 *
 * 示例 2:
 * 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
 * 输出：false
 */

/**
 * 解法：分治法（二维二分查找）
 * 思路：从矩阵中心分割，根据中值与target比较递归搜索三个子区域
 * 评价：⚠️可选。思路巧妙但实现复杂，最坏O(n)退化。右上角步进法更简洁高效，面试首选步进法。
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0) return false;

    let has = false;

    const find = (start: [number, number] , end: [number, number]) => {
        // 已经有结果了
        if (has) {
            return;
        }

        if (matrix[start[0]][start[1]] > target || matrix[end[0]][end[1]] < target) {
            return;
        }

        const mr = Math.floor((end[0] + start[0]) / 2);
        const mc = Math.floor((end[1] + start[1]) / 2);
        const num = matrix[mr][mc];

        if ((mr === start[0] && mc === start[1]) || (mr === end[0] && mc === end[1])) {
            // [2, 3], [5, 6], [5, 3], [2, 6]
            has = matrix[start[0]][start[1]] === target ||
                matrix[start[0]][end[1]] === target ||
                matrix[end[0]][start[1]] === target ||
                matrix[end[0]][end[1]] === target;
            return;
        }

        if (num === target) {
            has = true;
        } else {
            if (num < target) {
                find([mr, mc], end);
            } else {
                find(start, [mr, mc]);
            }

            // 右上区域
            find([start[0], mc], [mr, end[1]]);
            // 左下区域
            find([mr, start[1]], [end[0], mc]);
        }
    };

    find([0, 0], [matrix.length - 1, matrix[0].length - 1]);
    return has;
}

export default searchMatrix;
