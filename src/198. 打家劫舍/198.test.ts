import { describe, it, expect } from 'vitest'
import rob from './198'

describe('198. 打家劫舍', () => {
  it('示例 1: [1,2,3,1]', () => {
    expect(rob([1, 2, 3, 1])).toBe(4)
  })

  it('示例 2: [2,7,9,3,1]', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12)
  })

  it('单个房屋', () => {
    expect(rob([5])).toBe(5)
  })

  it('两个房屋', () => {
    expect(rob([2, 3])).toBe(3)
  })

  it('三个房屋', () => {
    expect(rob([1, 2, 3])).toBe(4)
  })

  it('所有房屋金额相同', () => {
    expect(rob([3, 3, 3, 3, 3])).toBe(9)
  })

  it('递增序列', () => {
    expect(rob([1, 2, 3, 4, 5])).toBe(9)
  })

  it('递减序列', () => {
    expect(rob([5, 4, 3, 2, 1])).toBe(9)
  })

  it('只有一个非零元素', () => {
    expect(rob([0, 0, 5, 0, 0])).toBe(5)
  })

  it('交替大小值', () => {
    expect(rob([100, 1, 1, 100, 1])).toBe(200)
  })

  it('较长数组', () => {
    expect(rob([6, 4, 2, 5, 3, 7, 8, 1, 9])).toBe(28)
  })
})
