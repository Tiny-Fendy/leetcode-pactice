import { describe, expect, it } from "vitest";

function findAnagrams(s: string, p: string): number[] {
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

describe('测试', () => {
    it('cbaebabacd, abc', () => {
        expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
    });

    it('abab, ab', () => {
        expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
    });
});
