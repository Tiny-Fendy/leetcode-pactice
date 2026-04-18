import { describe, it, expect } from 'vitest'
import firstMissingPositive from './41'

describe('41. 缺失的第一个正数', () => {
  it('示例 1: [1,2,0]', () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3)
  })

  it('示例 1: [0,1,2]', () => {
    expect(firstMissingPositive([0, 1, 2])).toBe(3)
  })

  it('示例 2: [3,4,-1,1]', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
  })

  it('示例 3: [7,8,9,11,12]', () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1)
  })

  it('单个元素 1', () => {
    expect(firstMissingPositive([1])).toBe(2)
  })

  it('单个元素 2', () => {
    expect(firstMissingPositive([2])).toBe(1)
  })

  it('调换的目标值不存在', () => {
    expect(firstMissingPositive([2147483647])).toBe(1)
  })

  it('空数组', () => {
    expect(firstMissingPositive([])).toBe(1)
  })

  it('包含负数', () => {
    expect(firstMissingPositive([-1, -2, -3])).toBe(1)
  })

  it('包含零', () => {
    expect(firstMissingPositive([0, 1, 2])).toBe(3)
  })

  it('连续正数', () => {
    expect(firstMissingPositive([1, 2, 3, 4, 5])).toBe(6)
  })

  it('有重复元素', () => {
    expect(firstMissingPositive([1, 1, 2, 2, 3])).toBe(4)
  })

  it('缺失中间的正数', () => {
    expect(firstMissingPositive([1, 3, 4, 5])).toBe(2)
  })

  it('较大数组', () => {
    expect(firstMissingPositive([3, 1, 2, 5, 6, 7, 8, 9])).toBe(4)
  })

  it('所有元素相同', () => {
    expect(firstMissingPositive([1, 1, 1, 1])).toBe(2)
  })

  it('混合情况', () => {
    expect(firstMissingPositive([1, -1, 2, -2, 3, -3, 5])).toBe(4)
  })
})
