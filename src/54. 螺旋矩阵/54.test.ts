import { describe, it, expect } from 'vitest'
import spiralOrder from './54'

describe('54. 螺旋矩阵', () => {
  it('示例 1: [[1,2,3],[4,5,6],[7,8,9]]', () => {
    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
  })

  it('示例 2: [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
  })

  it('单行矩阵', () => {
    expect(spiralOrder([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4])
  })

  it('单列矩阵', () => {
    expect(spiralOrder([[1], [2], [3]])).toEqual([1, 2, 3])
  })

  it('单个元素', () => {
    expect(spiralOrder([[1]])).toEqual([1])
  })

  it('2x2 矩阵', () => {
    expect(spiralOrder([[1, 2], [3, 4]])).toEqual([1, 2, 4, 3])
  })

  it('1x1 矩阵', () => {
    expect(spiralOrder([[5]])).toEqual([5])
  })

  it('空矩阵', () => {
    expect(spiralOrder([])).toEqual([])
  })

  it('4x4 矩阵', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
  })

  it('包含负数', () => {
    expect(spiralOrder([[-1, -2], [-3, -4]])).toEqual([-1, -2, -4, -3])
  })

  it('长方形矩阵（行多于列）', () => {
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8]
    ]
    expect(spiralOrder(matrix)).toEqual([1, 2, 4, 6, 8, 7, 5, 3])
  })

  it('长方形矩阵（列多于行）', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10]
    ]
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 5, 10, 9, 8, 7, 6])
  })
})
