import { describe, it, expect } from 'vitest'
import subarraySum from './560'

describe('560. 和为 K 的子数组', () => {
  it('示例 1: nums = [1,1,1], k = 2', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2)
  })

  it('示例 2: nums = [1,2,3], k = 3', () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2)
  })

  it('包含负数：nums = [1,-1,0], k = 0', () => {
    expect(subarraySum([1, -1, 0], 0)).toBe(3)
  })

  it('单个元素等于 k', () => {
    expect(subarraySum([5], 5)).toBe(1)
  })

  it('单个元素不等于 k', () => {
    expect(subarraySum([5], 3)).toBe(0)
  })

  it('空数组', () => {
    expect(subarraySum([], 0)).toBe(0)
  })

  it('k 为负数', () => {
    expect(subarraySum([-1, -2, -3], -3)).toBe(2)
  })

  it('所有元素相同', () => {
    expect(subarraySum([2, 2, 2], 4)).toBe(2)
  })

  it('复杂情况：多个子数组满足条件', () => {
    expect(subarraySum([1, 2, 1, 2, 1], 3)).toBe(4)
  })

  it('整个数组和等于 k', () => {
    expect(subarraySum([1, 2, 3], 6)).toBe(1)
  })
})
