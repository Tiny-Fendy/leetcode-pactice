import { describe, it, expect } from 'vitest'
import maxSubArray from './53'

describe('53. 最大子数组和', () => {
  it('示例 1: nums = [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })

  it('示例 2: nums = [1]', () => {
    expect(maxSubArray([1])).toBe(1)
  })

  it('示例 3: nums = [5,4,-1,7,8]', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
  })

  it('全部为负数', () => {
    expect(maxSubArray([-1, -2, -3, -4])).toBe(-1)
  })

  it('全部为正数', () => {
    expect(maxSubArray([1, 2, 3, 4])).toBe(10)
  })

  it('包含零', () => {
    expect(maxSubArray([0, -1, 0, -2, 0])).toBe(0)
  })

  it('单个负数', () => {
    expect(maxSubArray([-5])).toBe(-5)
  })

  it('单个正数', () => {
    expect(maxSubArray([5])).toBe(5)
  })

  it('正负交替', () => {
    expect(maxSubArray([1, -2, 3, -4, 5])).toBe(5)
  })

  it('长数组测试', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 3, -2, 1])).toBe(8)
  })

  it('最大值在中间', () => {
    expect(maxSubArray([1, 2, 3, -10, 4, 5, 6])).toBe(15)
  })

  it('最大值跨越整个数组', () => {
    expect(maxSubArray([1, 2, 3, 4, 5])).toBe(15)
  })
})
