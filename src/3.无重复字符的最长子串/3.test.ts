import { expect, it, describe } from "vitest";
import { lengthOfLongestSubstring } from "./3";

describe('3. 无重复字符的最长子串', () => {
  it('示例 1: abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  });

  it('示例 2: a', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  it('示例 3: bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('示例 4: pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('空字符串', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('所有字符都不同', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });

  it('包含空格和特殊字符', () => {
    expect(lengthOfLongestSubstring('abc abc')).toBe(4);
  });

  it('重复字符在中间', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });

  it('重复字符在开头', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
  });

  it('重复字符在末尾', () => {
    expect(lengthOfLongestSubstring('abb')).toBe(2);
  });

  it('长字符串', () => {
    expect(lengthOfLongestSubstring('anviajdbviouenviowenrviowenrvion')).toBe(10);
  });

  it('包含数字', () => {
    expect(lengthOfLongestSubstring('1234567890')).toBe(10);
  });

  it('大小写敏感', () => {
    expect(lengthOfLongestSubstring('AaBbCc')).toBe(6);
  });
});
