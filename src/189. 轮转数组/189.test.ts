import { describe, it, expect } from 'vitest'
import rotate from './189'

describe('189. 轮转数组', () => {
  it('示例 1: nums = [1,2,3,4,5,6,7], k = 3', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    rotate(nums, 3)
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

  it('示例 2: nums = [-1,-100,3,99], k = 2', () => {
    const nums = [-1, -100, 3, 99]
    rotate(nums, 2)
    expect(nums).toEqual([3, 99, -1, -100])
  })

  it('k 等于 0', () => {
    const nums = [1, 2, 3]
    rotate(nums, 0)
    expect(nums).toEqual([1, 2, 3])
  })

  it('k 等于数组长度', () => {
    const nums = [1, 2, 3]
    rotate(nums, 3)
    expect(nums).toEqual([1, 2, 3])
  })

  it('k 大于数组长度', () => {
    const nums = [1, 2, 3]
    rotate(nums, 5)
    expect(nums).toEqual([2, 3, 1])
  })

  it('单个元素', () => {
    const nums = [1]
    rotate(nums, 1)
    expect(nums).toEqual([1])
  })

  it('两个元素', () => {
    const nums = [1, 2]
    rotate(nums, 1)
    expect(nums).toEqual([2, 1])
  })

  it('所有元素相同', () => {
    const nums = [1, 1, 1, 1]
    rotate(nums, 2)
    expect(nums).toEqual([1, 1, 1, 1])
  })

  it('包含负数', () => {
    const nums = [-1, -2, -3, -4, -5]
    rotate(nums, 2)
    expect(nums).toEqual([-4, -5, -1, -2, -3])
  })

  it('k 为数组长度的倍数', () => {
    const nums = [1, 2, 3, 4]
    rotate(nums, 8)
    expect(nums).toEqual([1, 2, 3, 4])
  })

  it('较长数组', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    rotate(nums, 4)
    expect(nums).toEqual([7, 8, 9, 10, 1, 2, 3, 4, 5, 6])
  })

  it('原地修改验证', () => {
    const nums = [1, 2, 3, 4, 5]
    const originalRef = nums
    rotate(nums, 2)
    expect(nums).toBe(originalRef) // 确保是原地修改
    expect(nums).toEqual([4, 5, 1, 2, 3])
  })
})
