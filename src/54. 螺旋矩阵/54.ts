/**
 * 54. 螺旋矩阵
 * https://leetcode.cn/problems/spiral-matrix/
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 * 示例:
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 */

function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) return [];

    // 提示：模拟螺旋遍历过程，维护四个边界
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    // 列-横向走-x坐标
    let col = 0;
    // 行-竖向走-y坐标
    let row = 0;
    // 移动方位
    let des: 'right' | 'down' | 'left' | 'up' = 'right';

    const result = [];

    while (col <= right && col >= left && row <= bottom && row >= top) {
        result.push(matrix[row][col]);

        // 判断是否需要修改方向
        if (col === right && row === top && des === 'right') {
            top++;
            des = 'down';
        } else if (col === right && row === bottom && des === 'down') {
            right--;
            des = 'left';
        } else if (col === left && row === bottom && des === 'left') {
            bottom--;
            des = 'up';
        } else if (col === left && row === top && des === 'up') {
            left++;
            des = 'right';
        }

        // 移动坐标
        if (des === 'right') {
            col++;
        } else if (des === 'down') {
            row++;
        } else if (des === 'left') {
            col--;
        } else if (des === 'up') {
            row--;
        }
    }

    return result;
}

export default spiralOrder;
