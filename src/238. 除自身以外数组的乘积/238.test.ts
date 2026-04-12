import { describe, it, expect } from 'vitest'
import productExceptSelf from './238'

describe('238. 除自身以外数组的乘积', () => {
  it('示例 1: [1,2,3,4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
  })

  it('示例 2: [-1,1,0,-3,3]', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0])
  })

  it('两个元素', () => {
    expect(productExceptSelf([2, 3])).toEqual([3, 2])
  })

  it('包含零', () => {
    expect(productExceptSelf([1, 0, 3, 4])).toEqual([0, 12, 0, 0])
  })

  it('多个零', () => {
    expect(productExceptSelf([0, 0, 3, 4])).toEqual([0, 0, 0, 0])
  })

  it('包含负数', () => {
    expect(productExceptSelf([-1, -2, -3, -4])).toEqual([-24, -12, -8, -6])
  })

  it('正负混合', () => {
    expect(productExceptSelf([1, -2, 3, -4])).toEqual([24, -12, 8, -6])
  })

  it('所有元素相同', () => {
    expect(productExceptSelf([2, 2, 2, 2])).toEqual([8, 8, 8, 8])
  })

  it('较大数值', () => {
    expect(productExceptSelf([10, 20, 30])).toEqual([600, 300, 200])
  })

  it('单个元素为1', () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1])
  })

  it('五个元素', () => {
    expect(productExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
  })

  it('首尾元素', () => {
    const nums = [2, 3, 4, 5]
    const result = productExceptSelf(nums)
    // 验证首尾元素计算正确
    expect(result[0]).toBe(3 * 4 * 5)
    expect(result[result.length - 1]).toBe(2 * 3 * 4)
  })
})
