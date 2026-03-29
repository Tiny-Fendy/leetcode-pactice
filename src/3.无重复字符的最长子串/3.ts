/**
 * 3. 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例:
 * 输入：s = "abcabcbb"
 * 输出：3
 * 解释：因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 输入：s = "bbbbb"
 * 输出：1
 * 解释：因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 * 输入：s = "pwwkew"
 * 输出：3
 * 解释：因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 */

export function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) {
        return 0;
    }

    let l = 0;
    let r = 0;

    const map: Record<string, number> = {
    };
    let max = 1;

    while (l <= r && r < s.length) {
        const strR = s[r];
        const next = s[r + 1];

        if (!next) {
            break;
        }

        map[strR] = r;

        if (map[next] >= 0) {
            // 存在
            for (;l <= map[next];l++) {
                // 清除
                delete map[s[l]];
            }
            // 更新位置
            r += 1;
            map[next] = r;
        } else {
            // 不存在
            r += 1;
            max = Math.max(r - l + 1, max);
        }
    }

    return max;
}
