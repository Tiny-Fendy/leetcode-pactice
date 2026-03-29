import { describe, it, expect } from 'vitest'
import maxSlidingWindow from './239'

describe('239. 滑动窗口最大值', () => {
  it('示例 1: nums = [1,3,-1,-3,5,3,6,7], k = 3', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7])
  })

  it('示例 2: nums = [1], k = 1', () => {
    expect(maxSlidingWindow([1], 1)).toEqual([1])
  })

  it('示例 3: nums = [1,-1], k = 1', () => {
    expect(maxSlidingWindow([1, -1], 1)).toEqual([1, -1])
  })

  it('示例 4: nums = [9,11], k = 2', () => {
    expect(maxSlidingWindow([9, 11], 2)).toEqual([11])
  })

  it('示例 5: nums = [4,-2], k = 2', () => {
    expect(maxSlidingWindow([4, -2], 2)).toEqual([4])
  })

  it('窗口大小等于数组长度', () => {
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 5)).toEqual([5])
  })

  it('窗口大小为 1', () => {
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5])
  })

  it('所有元素相同', () => {
    expect(maxSlidingWindow([5, 5, 5, 5], 2)).toEqual([5, 5, 5])
  })

  it('包含负数', () => {
    expect(maxSlidingWindow([-1, -5, -2, -3, -1], 3)).toEqual([-1, -2, -1])
  })

  it('递减序列', () => {
    expect(maxSlidingWindow([5, 4, 3, 2, 1], 3)).toEqual([5, 4, 3])
  })

  it('递增序列', () => {
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5])
  })

  it('较大窗口', () => {
    expect(maxSlidingWindow([1, 3, 1, 2, 0, 5], 4)).toEqual([3, 3, 5])
  })

  it('', () => {
    expect(maxSlidingWindow([1,3,1,2,0,5], 3)).toEqual([3,3,2,5])
  });
})
