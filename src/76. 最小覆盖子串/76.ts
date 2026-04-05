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

// a包含b
function isCover(cntA: number[], cntB: number[]) {
    let result = true;

    for (let i = 0;i < cntA.length;i++) {
        if (cntA[i] < cntB[i]) {
            result = false;
            break;
        }
    }

    return result;
}

function minWindow(s: string, t: string): string {
    if (s.length < t.length || !t.length) {
        return '';
    }

    let minStr = '';

    // 构造map
    const cntT = Array(128).fill(0);
    const cntS = Array(128).fill(0);

    for (const p of t) {
        cntT[p.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    let l = 0;

    for (let r = 0; r < s.length; r++) {

        // 右端加入
        cntS[s.charCodeAt(r) - 'A'.charCodeAt(0)]++;

        // 是否包含
        while (isCover(cntS, cntT)) {
            if (r - (l - 1) <= minStr.length || !minStr.length) {
                minStr = s.substring(l, r + 1);
            }

            // 左边缩小
            cntS[s[l].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            l++;
        }
    }

    return minStr;
}

export default minWindow;
