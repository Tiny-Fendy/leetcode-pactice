import { describe, expect, it } from "vitest";
import { findAnagrams } from "./438";

describe('测试', () => {
    it('cbaebabacd, abc', () => {
        expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
    });

    it('abab, ab', () => {
        expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
    });
});
