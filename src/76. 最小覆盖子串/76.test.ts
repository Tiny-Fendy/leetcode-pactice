import { describe, it, expect } from 'vitest'
import minWindow from './76'

describe('76. 最小覆盖子串', () => {
  it('示例 1: s = "ADOBECODEBANC", t = "ABC"', () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC")
  })

  it('示例 2: s = "a", t = "a"', () => {
    expect(minWindow("a", "a")).toBe("a")
  })

  it('示例 3: s = "a", t = "aa"', () => {
    expect(minWindow("a", "aa")).toBe("")
  })

  it('示例 4: s = "ab", t = "a"', () => {
    expect(minWindow("ab", "a")).toBe("a")
  })

  it('示例 5: s = "ba", t = "a"', () => {
    expect(minWindow("ba", "a")).toBe("a")
  })

  it('s 长度小于 t', () => {
    expect(minWindow("a", "ab")).toBe("")
  })

  it('完全匹配', () => {
    expect(minWindow("abc", "abc")).toBe("abc")
  })

  it('t 有重复字符', () => {
    expect(minWindow("aabbbcccccc", "bcc")).toBe("bcc")
  })

  it('多个可能的答案，返回最短的', () => {
    expect(minWindow("bbaac", "aba")).toBe("baa")
  })

  it('包含所有字符但需要最短', () => {
    expect(minWindow("abcde", "ace")).toBe("abcde")
  })

  it('t 为空字符串', () => {
    expect(minWindow("abc", "")).toBe("")
  })

  it('s 和 t 相同', () => {
    expect(minWindow("abcdef", "abcdef")).toBe("abcdef")
  })

  it('复杂情况：多个重复字符', () => {
    expect(minWindow("a", "b")).toBe("")
  })
})
