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

export function findAnagrams(s: string, p: string): number[] {
    const result: number[] = [];
    // 创建p的map
    const createStrMap = (str: string) => {
        const map: Record<string, number> = {};

        for (let i = 0; i < str.length; i++) {
            const chat = str[i];
            map[chat] = map[chat] ? map[chat] + 1 : 1;
        }

        return map;
    };
    // 校验两个check是相等的
    const checkMap = (map1: Record<string, number>, map2: Record<string, number>) => {
        return Object.keys(map1).every((key) => map1[key] === map2[key]);
    };
    const pMap = createStrMap(p);

    let left = 0;
    const lMap = createStrMap(s.slice(0, p.length));

    do {
        if (checkMap(lMap, pMap)) {
            result.push(left);
        }

        // 同步map
        const chat = s[left];
        const num = lMap[chat];

        // 减去左边
        if (num > 1) {
            lMap[chat] = num - 1;
        } else if (num === 1) {
            delete lMap[chat];
        }

        // 加上右边
        const newChat = s[left + p.length];
        lMap[newChat] = lMap[newChat] ? lMap[newChat] + 1 : 1;
        left++;
    } while ((left + p.length) <= s.length);

    return result;
}
