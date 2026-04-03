/**
 * 438. 找到字符串中所有字母异位词
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的异位词的子串，返回这些子串的起始索引。
 * 异位词指由相同字母重排列形成的字符串（包括相同的字符串）。
 *
 * 示例:
 * 输入：s = "cbaebabacd", p = "abc"
 * 输出：[0,6]
 *
 * 输入：s = "abab", p = "ab"
 * 输出：[0,1,2]
 */

/**
 * 参考 灵茶山艾府 的解答，不定长滑动窗口
 * 链接：https://leetcode.cn/problems/find-all-anagrams-in-a-string/solutions/2969498/liang-chong-fang-fa-ding-chang-hua-chuan-14pd/
 * @param s
 * @param p
 */
export function findAnagrams(s: string, p: string): number[] {
    const result: number[] = [];
    // 需要的字符组
    const cnt: number[] = new Array(26).fill(0);

    for (const char of p) {
        cnt[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // 左端点
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const index = s[right].charCodeAt(0) - 'a'.charCodeAt(0);

        // 右端点进入窗口
        cnt[index]--;

        // 有数字小于0，证明有字符多了，需要缩小滑动窗口，一直要缩小到恰好等于需要的数量
        // 如果数量大于0，则证明数量还不够，继续扩大滑动窗口
        while (cnt[index] < 0) {
            // 移除左端点
            const leftIndex = s[left].charCodeAt(0) - 'a'.charCodeAt(0);
            cnt[leftIndex]++;
            left++;
        }

        // 如果长度刚刚好相等，那么就说明匹配成功（理解这个关键点）
        if (right - (left - 1) === p.length) {
            result.push(left);
        }
    }

    return result;
}
