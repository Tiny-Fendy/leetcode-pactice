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
 * 解法：右上角步进法
 * 思路：从右上角开始，根据当前值与target比较决定向左或向下移动
 * 评价：✅强烈推荐。最简洁高效的解法，每次排除一行或一列，时间O(m+n)，空间O(1)，面试首选。
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0) return false;

    let row = 0;
    let col = matrix[0].length - 1;

    do {
        const num = matrix[row][col];

        if (num === target) {
            return true;
        } else if (num > target) {
            col--;
        } else {
            row++;
        }
    } while (col >= 0 && row < matrix.length);

    return false;
}

export default searchMatrix;
