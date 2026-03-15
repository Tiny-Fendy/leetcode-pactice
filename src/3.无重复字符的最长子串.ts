import { expect, it, describe } from "vitest";

function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) {
        return 0;
    }

    let l = 0;
    let r = 0;

    const map: Record<string, number> = {
    };
    let max = 1;

    while (l <= r && r < s.length) {
        const strL = s[l];
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

describe('测试', () => {
    it('abcabcbb', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    });

    it('should a', () => {
        expect(lengthOfLongestSubstring('a')).toBe(1);
    });

    it('bbbbb', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });

    it('pwwkew', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });
});
