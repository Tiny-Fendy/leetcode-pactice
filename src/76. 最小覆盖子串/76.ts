/**
 * 76. 最小覆盖子串
 * https://leetcode.cn/problems/minimum-window-substring/
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 *
 * 注意：
 * - 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * - 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 * 示例:
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 *
 * 输入：s = "a", t = "aa"
 * 输出：""
 */

function minWindow(s: string, t: string): string {
    if (s.length < t.length || !t.length) {
        return '';
    }

    const BASE_CODE = 'A'.charCodeAt(0);
    let minStr = '';
    // 有多少种字符
    let requiredCount = 0;

    // 构造map
    const cntT = Array(128).fill(0);
    const cntS = Array(128).fill(0);

    for (const p of t) {
        const code = p.charCodeAt(0) - BASE_CODE;

        if (cntT[code] === 0) {
            requiredCount++;
        }
        cntT[code]++;
    }

    let l = 0;
    // 窗口内的个数
    let winCount = 0;

    for (let r = 0; r < s.length; r++) {
        const code = s.charCodeAt(r) - BASE_CODE;

        // 在目标范围内才加
        if (cntT[code] > 0) {
            cntS[code]++;

            // 个数能覆盖到
            if (cntS[code] === cntT[code]) {
                winCount++;
            }
        }

        // 如果
        while (winCount === requiredCount) {
            if (r - (l - 1) <= minStr.length || !minStr.length) {
                minStr = s.substring(l, r + 1);
            }

            const lCode = s.charCodeAt(l) - BASE_CODE;

            if (cntT[lCode] > 0) {
                if (cntS[lCode] === cntT[lCode]) {
                    winCount--;
                }

                cntS[lCode]--;
            }

            // 左边缩小
            l++;
        }
    }

    return minStr;
}

export default minWindow;
