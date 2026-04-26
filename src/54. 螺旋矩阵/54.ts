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

const DES = [[1, 0], [0, 1], [-1, 0], [0, -1]];
function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) return [];

    // 横向长度
    let colLen = matrix[0].length;
    // 竖向长度
    let rowLen = matrix.length - 1;
    let SIZE =  colLen * (rowLen + 1);
    // 当前位置
    let loc = [-1, 0];

    const result: number[] = [];

    for (let di = 0;result.length < SIZE;di = (di + 1) % 4) {
        const [dc, dr] = DES[di];
        // 步数
        const step = dc === 0 ? rowLen : colLen;

        // 走几步
        for (let i = 0;i < step;i++) {
            loc[0] += dc;
            loc[1] += dr;
            result.push(matrix[loc[1]][loc[0]]);
        }

        dc === 0 ? rowLen-- : colLen--;
    }

    return result;
}

export default spiralOrder;
