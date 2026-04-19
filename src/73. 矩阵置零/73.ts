/**
 * 73. 矩阵置零
 * https://leetcode.cn/problems/set-matrix-zeroes/
 *
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 *
 * 示例:
 * 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：[[1,0,1],[0,0,0],[1,0,1]]
 *
 * 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */

// 空间复杂度O(1)的核心思路，用矩阵自身来记录，用首行首列来标记
function setZeroes(matrix: number[][]): void {
    let isFirstRowHasZero = false;
    let isFirstColHasZero = false;

    // 要求：原地修改矩阵，不使用额外空间（或尽量少用）
    for (let m = 0;m < matrix.length;m++) {
        for (let n = 0;n < matrix[m].length;n++) {
            if (matrix[m][n] === 0) {
                // 记录首行首列是否需要
                if (m === 0) {
                    // 首行
                    isFirstRowHasZero = true;
                }

                if (n === 0) {
                    // 首列
                    isFirstColHasZero = true;
                }

                matrix[0][n] = 0;
                matrix[m][0] = 0;
            }
        }
    }

    // 遍历行
    for (let n = 1;n < matrix[0].length;n++) {
        if (matrix[0][n] === 0) {
            for (let m = 1;m < matrix.length;m++) {
                matrix[m][n] = 0;
            }
        }
    }

    // 遍历列
    for (let m = 1;m < matrix.length;m++) {
        if (matrix[m][0] === 0) {
            for (let n = 1;n < matrix[m].length;n++) {
                matrix[m][n] = 0;
            }
        }
    }

    if (isFirstRowHasZero) {
        for (let n = 1;n < matrix[0].length;n++) {
            matrix[0][n] = 0;
        }
    }

    if (isFirstColHasZero) {
        for (let m = 1;m < matrix.length;m++) {
            matrix[m][0] = 0;
        }
    }
}

export default setZeroes;
