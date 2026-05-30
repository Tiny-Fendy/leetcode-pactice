import { describe, it, expect } from 'vitest'
import groupAnagrams from './49'

describe('49. 字母异位词分组', () => {
  it('示例 1: 基本测试', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
    const result = groupAnagrams(strs)
    // 结果可以是任意顺序，需要排序后比较
    const sorted = result.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]))
    expect(sorted).toEqual([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']])
  })

  it('示例 2: 空字符串', () => {
    const strs = ['']
    const result = groupAnagrams(strs)
    expect(result).toEqual([['']])
  })

  it('示例 3: 单个字符', () => {
    const strs = ['a']
    const result = groupAnagrams(strs)
    expect(result).toEqual([['a']])
  })

  it('所有字符串相同', () => {
    const strs = ['abc', 'abc', 'abc']
    const result = groupAnagrams(strs)
    expect(result.length).toBe(1)
    expect(result[0]).toEqual(['abc', 'abc', 'abc'])
  })

  it('没有异位词', () => {
    const strs = ['abc', 'def', 'ghi']
    const result = groupAnagrams(strs)
    expect(result.length).toBe(3)
  })

  it('包含重复字符串', () => {
    const strs = ['eat', 'tea', 'eat', 'tea']
    const result = groupAnagrams(strs)
    expect(result.length).toBe(1)
    expect(result[0].length).toBe(4)
  })

  it('较长字符串', () => {
    const strs = ['listen', 'silent', 'enlist', 'hello', 'world']
    const result = groupAnagrams(strs)
    expect(result.length).toBe(3)
  })

  it('大小写敏感', () => {
    const strs = ['Abc', 'abc', 'bAc']
    const result = groupAnagrams(strs)
    // 大小写不同不算异位词
    expect(result.length).toBeGreaterThanOrEqual(2)
  })

  it('包含特殊字符', () => {
    const strs = ['a!', '!a', 'aa']
    const result = groupAnagrams(strs)
    expect(result.length).toBe(2)
  })

  it('单个长单词', () => {
    const strs = ['abcdefghijklmnopqrstuvwxyz']
    const result = groupAnagrams(strs)
    expect(result).toEqual([['abcdefghijklmnopqrstuvwxyz']])
  })

  it('多个异位词组', () => {
    const strs = ['cab', 'bac', 'abc', 'xyz', 'zyx', 'yxz']
    const result = groupAnagrams(strs)
    expect(result.length).toBe(2)
    expect(result.some(group => group.length === 3)).toBe(true)
  })

  it('空数组', () => {
    const strs: string[] = []
    const result = groupAnagrams(strs)
    expect(result).toEqual([])
  })
})
