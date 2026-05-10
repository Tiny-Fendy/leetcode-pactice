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

function rotate(matrix: number[][]): void {
    for (let row = 0;row < Math.floor(matrix.length / 2); row++) {
        // r左上角顶点
        for (let col = row;col < (matrix.length - 1) - row;col++) {
            const len = matrix.length - 1;

            // 本次调换的列表
            const dotList = [
                [row, col],
                [len - col, row],
                [len - row, len - col],
                [col, len - row]
            ];
            let store = matrix[dotList[0][0]][dotList[0][1]];

            for (let m = 0;m <= dotList.length - 1;m ++) {
                const cur = dotList[m];
                const next = dotList[m + 1];

                if (next) {
                    // 修改值
                    matrix[cur[0]][cur[1]] = matrix[next[0]][next[1]];
                } else {
                    matrix[cur[0]][cur[1]] = store;
                }
            }
        }
    }
}

export default rotate;
