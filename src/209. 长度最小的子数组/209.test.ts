import { describe, it, expect } from 'vitest'
import minSubArrayLen from './209'

describe('209. 长度最小的子数组', () => {
  it('示例 1: target = 7, nums = [2,3,1,2,4,3]', () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
  })

  it('示例 2: target = 4, nums = [1,4,4]', () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1)
  })

  it('示例 3: target = 11, nums = [1,1,1,1,1,1,1,1]', () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0)
  })

  it('单个元素等于 target', () => {
    expect(minSubArrayLen(5, [5])).toBe(1)
  })

  it('单个元素小于 target', () => {
    expect(minSubArrayLen(5, [3])).toBe(0)
  })

  it('整个数组和等于 target', () => {
    expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5)
  })

  it('整个数组和大于 target', () => {
    expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toBe(3)
  })

  it('所有元素相同', () => {
    expect(minSubArrayLen(7, [2, 2, 2, 2, 2])).toBe(4)
  })

  it('target 为 1', () => {
    expect(minSubArrayLen(1, [1, 2, 3, 4, 5])).toBe(1)
  })

  it('大数组测试', () => {
    expect(minSubArrayLen(100, Array(20).fill(5))).toBe(20)
  })

  it('最小长度为 1', () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1)
  })

  it('需要多个元素累加', () => {
    expect(minSubArrayLen(10, [1, 2, 3, 4, 5])).toBe(3)
  })
})
