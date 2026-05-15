/**
 * 48. 旋转图像
 * https://leetcode.cn/problems/rotate-image/
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 *
 * 示例:
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 *
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

/**
 * 解法：转置 + 左右翻转
 * 思路：先沿主对角线转置矩阵，再对每行左右翻转
 * 评价：✅强烈推荐。最简洁的原地旋转解法，两步操作直观易懂，代码量最少，面试首选。
 */

function rotate(matrix: number[][]): void {
    // 翻转法，对角线翻转一次，横向翻转一次。
    for (let r = 0;r < matrix.length; r++) {
        for (let c = r; c < matrix[0].length; c++) {
            // 对角转置矩阵，不能使用结构
            const tem = matrix[c][r];

            matrix[c][r] = matrix[r][c];
            matrix[r][c] = tem;
        }

        // 横向翻转同行
        // 两次循环合并为一次
        matrix[r].reverse();
    }
}

export default rotate;
