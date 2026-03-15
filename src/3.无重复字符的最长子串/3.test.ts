import { expect, it, describe } from "vitest";
import { lengthOfLongestSubstring } from "./3";

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
